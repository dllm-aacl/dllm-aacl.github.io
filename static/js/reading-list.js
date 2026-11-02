// Renders reading-list.md into the Reading List section: an h3 per topic, then one
// paragraph per paper (bold title, then its remaining lines joined into one muted line).
// The file is written for us as much as for readers, so a few things are left out:
//   - everything before the first "## " heading (the file's own title and notes)
//   - a trailing full-width note on a heading, e.g. "Training Objectives（p68–69）"
//   - lines starting with "※" (notes on how the slides name a paper)
// A paper is a list item ("1. " or "- ") followed by its lines up to the next blank line.
// The first [text](url) among those lines becomes the link on the title and is dropped
// from its line, so "ICML, 2015 · [arXiv:1503.03585](...)" shows as "ICML, 2015".
(function () {
  const SOURCE = "./reading-list.md";

  const target = document.querySelector("#reading-list .reading-list");
  if (!target) return;

  const escape = function (s) {
    return s.replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  const inline = function (s) {
    return escape(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  };

  // The file keeps every author; the page shows "First Author et al." ("A and B" for
  // two). A group byline such as "Inception Labs: ..." is shown as the group name alone.
  const shortAuthors = function (line) {
    const group = /^([^:]+):\s/.exec(line);
    if (group) return group[1];
    const names = line.split(/\s*,\s*/);
    if (names.length === 1) return names[0];
    if (names.length === 2) return names[0] + " and " + names[1];
    return names[0] + " et al.";
  };

  const parse = function (text) {
    const groups = [];
    let group = null;
    let entry = null;
    text
      .replace(/<!--[\s\S]*?-->/g, "")
      .split("\n")
      .forEach(function (raw) {
        const line = raw.trim();
        if (!line) {
          entry = null;
          return;
        }
        let m;
        if ((m = /^##\s+(.+)$/.exec(line))) {
          group = { heading: m[1].replace(/\s*（[^（）]*）$/, ""), entries: [] };
          groups.push(group);
          entry = null;
        } else if (group && (m = /^(?:\d+\.|[-*])\s+(.+)$/.exec(line))) {
          const title = m[1].replace(/\*\*/g, "");
          const titleLink = /^\[(.+)\]\((\S+)\)$/.exec(title);
          entry = titleLink
            ? { title: titleLink[1], url: titleLink[2], lines: [] }
            : { title: title, url: "", lines: [] };
          group.entries.push(entry);
        } else if (entry && line.charAt(0) !== "※") {
          let rest = line;
          const link = /\s*·?\s*\[[^\]]+\]\(([^)\s]+)\)/.exec(rest);
          if (link && !entry.url) {
            entry.url = link[1];
            rest = (rest.slice(0, link.index) + rest.slice(link.index + link[0].length)).trim();
          }
          if (rest) entry.lines.push(rest);
        }
      });
    // Hide topics that have no papers yet.
    return groups.filter(function (g) {
      return g.entries.length;
    });
  };

  const render = function (groups) {
    return groups
      .map(function (g) {
        const papers = g.entries.map(function (e) {
          // Authors and "Venue, Year" share one line; the venue part never wraps on its own.
          const meta = e.lines.length
            ? '<br>\n<span class="meta">' +
              inline(shortAuthors(e.lines[0])) +
              e.lines.slice(1).map(function (l) {
                return ' <span class="nowrap">— ' + inline(l) + "</span>";
              }).join("") +
              "</span>"
            : "";
          const title = e.url
            ? '<a href="' + escape(e.url) + '" target="_blank" rel="noopener">' + inline(e.title) + "</a>"
            : inline(e.title);
          return "<p><strong>" + title + "</strong>" + meta + "</p>";
        });
        return '<h3 class="title is-5">' + inline(g.heading) + "</h3>\n" + papers.join("\n");
      })
      .join("\n");
  };

  fetch(SOURCE, { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error(res.status);
      return res.text();
    })
    .then(function (text) {
      const groups = parse(text);
      if (groups.length) target.innerHTML = render(groups);
    })
    .catch(function () {}); // leave the TBA placeholder in place
})();
