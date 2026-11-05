# Key Papers（AACL_slide_v1.0.0.pdf）

スライドの各セクションの「Key Papers」に載っている論文の一覧。最後の節は、Part III の最後の flow LM の3枚（AACL_slide_add.pdf）で引用している論文。
セクションごとに年の順（同じ年は第1著者の姓のアルファベット順、同じ人は題名の順）。
各論文は、タイトル／著者（全員）／会議名または arXiv、年／リンク の順。

## Foundations of Diffusion Language Models（p32–33）

1. **Deep Unsupervised Learning using Nonequilibrium Thermodynamics**  
    Jascha Sohl-Dickstein, Eric A. Weiss, Niru Maheswaranathan, Surya Ganguli  
    ICML, 2015 · [arXiv:1503.03585](https://arxiv.org/abs/1503.03585)

2. **Denoising Diffusion Probabilistic Models**  
    Jonathan Ho, Ajay Jain, Pieter Abbeel  
    NeurIPS, 2020 · [arXiv:2006.11239](https://arxiv.org/abs/2006.11239)

3. **Structured Denoising Diffusion Models in Discrete State-Spaces**  
    Jacob Austin, Daniel D. Johnson, Jonathan Ho, Daniel Tarlow, Rianne van den Berg  
    NeurIPS, 2021 · [arXiv:2107.03006](https://arxiv.org/abs/2107.03006)

4. **A Continuous Time Framework for Discrete Denoising Models**  
    Andrew Campbell, Joe Benton, Valentin De Bortoli, Tom Rainforth, George Deligiannidis, Arnaud Doucet  
    NeurIPS, 2022 · [arXiv:2205.14987](https://arxiv.org/abs/2205.14987)

5. **Autoregressive Diffusion Models**  
    Emiel Hoogeboom, Alexey A. Gritsenko, Jasmijn Bastings, Ben Poole, Rianne van den Berg, Tim Salimans  
    ICLR, 2022 · [arXiv:2110.02037](https://arxiv.org/abs/2110.02037)

6. **Diffusion-LM Improves Controllable Text Generation**  
    Xiang Lisa Li, John Thickstun, Ishaan Gulrajani, Percy Liang, Tatsunori B. Hashimoto  
    NeurIPS, 2022 · [arXiv:2205.14217](https://arxiv.org/abs/2205.14217)

7. **Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution**  
    Aaron Lou, Chenlin Meng, Stefano Ermon  
    ICML, 2024 · [arXiv:2310.16834](https://arxiv.org/abs/2310.16834)

8. **Simple and Effective Masked Diffusion Language Models**  
    Subham Sekhar Sahoo, Marianne Arriola, Yair Schiff, Aaron Gokaslan, Edgar Marroquin, Justin T Chiu, Alexander Rush, Volodymyr Kuleshov  
    NeurIPS, 2024 · [arXiv:2406.07524](https://arxiv.org/abs/2406.07524)

9. **Simplified and Generalized Masked Diffusion for Discrete Data**  
    Jiaxin Shi, Kehang Han, Zhe Wang, Arnaud Doucet, Michalis K. Titsias  
    NeurIPS, 2024 · [arXiv:2406.04329](https://arxiv.org/abs/2406.04329)

10. **Train for the Worst, Plan for the Best: Understanding Token Ordering in Masked Diffusions**  
    Jaeyeon Kim, Kulin Shah, Vasilis Kontonis, Sham Kakade, Sitan Chen  
    ICML, 2025 · [arXiv:2502.06768](https://arxiv.org/abs/2502.06768)

11. **Large Language Diffusion Models**  
    Shen Nie, Fengqi Zhu, Zebin You, Xiaolu Zhang, Jingyang Ou, Jun Hu, Jun Zhou, Yankai Lin, Ji-Rong Wen, Chongxuan Li  
    NeurIPS, 2025 · [arXiv:2502.09992](https://arxiv.org/abs/2502.09992)

12. **Your Absorbing Discrete Diffusion Secretly Models the Conditional Distributions of Clean Data**  
    Jingyang Ou, Shen Nie, Kaiwen Xue, Fengqi Zhu, Jiacheng Sun, Zhenguo Li, Chongxuan Li  
    ICLR, 2025 · [arXiv:2406.03736](https://arxiv.org/abs/2406.03736)

13. **The Diffusion Duality**  
    Subham Sekhar Sahoo, Justin Deschenaux, Aaron Gokaslan, Guanghan Wang, Justin Chiu, Volodymyr Kuleshov  
    ICML, 2025 · [arXiv:2506.10892](https://arxiv.org/abs/2506.10892)

14. **Simple Guidance Mechanisms for Discrete Diffusion Models**  
    Yair Schiff, Subham Sekhar Sahoo, Hao Phung, Guanghan Wang, Sam Boshar, Hugo Dalla-torre, Bernardo P. de Almeida, Alexander Rush, Thomas Pierrot, Volodymyr Kuleshov  
    ICLR, 2025 · [arXiv:2412.10193](https://arxiv.org/abs/2412.10193)

15. **Remasking Discrete Diffusion Models with Inference-Time Scaling**  
    Guanghan Wang, Yair Schiff, Subham Sekhar Sahoo, Volodymyr Kuleshov  
    NeurIPS, 2025 · [arXiv:2503.00307](https://arxiv.org/abs/2503.00307)

## Model Families and Scaling（p45–46）

1. **Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models**  
    Marianne Arriola, Aaron Gokaslan, Justin T. Chiu, Zhihan Yang, Zhixuan Qi, Jiaqi Han, Subham Sekhar Sahoo, Volodymyr Kuleshov  
    ICLR, 2025 · [arXiv:2503.09573](https://arxiv.org/abs/2503.09573)

2. **LLaDA2.0: Scaling Up Diffusion Language Models to 100B**  
    Tiwei Bie, Maosong Cao, Kun Chen, Lun Du, Mingliang Gong, Zhuochen Gong, Yanmei Gu, Jiaqi Hu, Zenan Huang, Zhenzhong Lan, Chengxi Li, Chongxuan Li, Jianguo Li, Zehuan Li, Huabin Liu, Lin Liu, Guoshan Lu, Xiaocheng Lu, Yuxin Ma, Jianfeng Tan, Lanning Wei, Ji-Rong Wen, Yipeng Xing, Xiaolu Zhang, Junbo Zhao, Da Zheng, Jun Zhou, Junlin Zhou, Zhanchao Zhou, Liwang Zhu, Yihong Zhuang  
    arXiv, 2025 · [arXiv:2512.15745](https://arxiv.org/abs/2512.15745)

3. **Scaling Diffusion Language Models via Adaptation from Autoregressive Models**  
    Shansan Gong, Shivam Agarwal, Yizhe Zhang, Jiacheng Ye, Lin Zheng, Mukai Li, Chenxin An, Peilin Zhao, Wei Bi, Jiawei Han, Hao Peng, Lingpeng Kong  
    ICLR, 2025 · [arXiv:2410.17891](https://arxiv.org/abs/2410.17891)

4. **Mercury: Ultra-Fast Language Models Based on Diffusion**  
    Inception Labs: Samar Khanna, Siddhant Kharbanda, Shufan Li, Harshit Varma, Eric Wang, Sawyer Birnbaum, Ziyang Luo, Yanis Miraoui, Akash Palrecha, Stefano Ermon, Aditya Grover, Volodymyr Kuleshov  
    arXiv, 2025 · [arXiv:2506.17298](https://arxiv.org/abs/2506.17298)

5. **Large Language Diffusion Models**  
    Shen Nie, Fengqi Zhu, Zebin You, Xiaolu Zhang, Jingyang Ou, Jun Hu, Jun Zhou, Yankai Lin, Ji-Rong Wen, Chongxuan Li  
    NeurIPS, 2025 · [arXiv:2502.09992](https://arxiv.org/abs/2502.09992)

6. **Scaling up Masked Diffusion Models on Text**  
    Shen Nie, Fengqi Zhu, Chao Du, Tianyu Pang, Qian Liu, Guangtao Zeng, Min Lin, Chongxuan Li  
    ICLR, 2025 · [arXiv:2410.18514](https://arxiv.org/abs/2410.18514)

7. **Diffusion Beats Autoregressive in Data-Constrained Settings**  
    Mihir Prabhudesai, Mengning Wu, Amir Zadeh, Katerina Fragkiadaki, Deepak Pathak  
    NeurIPS, 2025 · [arXiv:2507.15857](https://arxiv.org/abs/2507.15857)

8. **The Diffusion Duality**  
    Subham Sekhar Sahoo, Justin Deschenaux, Aaron Gokaslan, Guanghan Wang, Justin Chiu, Volodymyr Kuleshov  
    ICML, 2025 · [arXiv:2506.10892](https://arxiv.org/abs/2506.10892)

9. **Dream 7B: Diffusion Large Language Models**  
    Jiacheng Ye, Zhihui Xie, Lin Zheng, Jiahui Gao, Zirui Wu, Xin Jiang, Zhenguo Li, Lingpeng Kong  
    arXiv, 2025 · [arXiv:2508.15487](https://arxiv.org/abs/2508.15487)

10. **SDAR: A Synergistic Diffusion-AutoRegression Paradigm for Scalable Sequence Generation**  
    Shuang Cheng, Yihan Bian, Dawei Liu, Linfeng Zhang, Qian Yao, Zhongbo Tian, Wenhai Wang, Qipeng Guo, Kai Chen, Biqing Qi, Bowen Zhou  
    Findings of ACL, 2026 · [arXiv:2510.06303](https://arxiv.org/abs/2510.06303)

11. **DiffusionGemma Technical Report**  
    DiffusionGemma Team (Google DeepMind): Adrien Ali Taïga, James Assiene, Daniele Calandriello, Rahma Chaabouni, João Gante, Tamara von Glehn, Nate Keating, Chris Knutsen, Martin Kukla, Tianlin Liu, Ivan Lobov, Ofir Nabati, João Gabriel Oliveira, Nicolas Perez-Nieves, Nastasia Prutianova, Bobak Shahriari, Jean Tarbouriech, Pavel Tyletski, Çağlar Ünlü, Cindy Wu, Glenn Cameron, Jerome Connor, Sertan Girgin, Maarten Grootendorst, Alon Levkovitch, Eliya Nachmani, Omar Sanseviero, Piotr Stanczyk, Quentin Berthet, Andrew Campbell, Clément Crepy, Valentin De Bortoli, Arnaud Doucet, Romuald Elie, Alexandre Galashov, Klaus Greff, Alexis Jacq, David Ruhe, Yu-Han Wu, Sebastian Flennerhag, Brendan O'Donoghue, George Scrivener, Shantanu Thakoor  
    arXiv, 2026 · [arXiv:2608.00146](https://arxiv.org/abs/2608.00146)

12. **Beyond Fixed: Training-Free Variable-Length Denoising for Diffusion Large Language Models**  
    Jinsong Li, Xiaoyi Dong, Yuhang Zang, Yuhang Cao, Jiaqi Wang, Dahua Lin  
    ICLR, 2026 · [arXiv:2508.00819](https://arxiv.org/abs/2508.00819)

13. **Scaling Beyond Masked Diffusion Language Models**  
    Subham Sekhar Sahoo, Jean-Marie Lemercier, Zhihan Yang, Justin Deschenaux, Jingyu Liu, John Thickstun, Ante Jukic  
    ICML, 2026 · [arXiv:2602.15014](https://arxiv.org/abs/2602.15014)

14. **DreamOn: Diffusion Language Models For Code Infilling Beyond Fixed-size Canvas**  
    Zirui Wu, Lin Zheng, Zhihui Xie, Jiacheng Ye, Jiahui Gao, Shansan Gong, Yansong Feng, Zhenguo Li, Wei Bi, Guorui Zhou, Lingpeng Kong  
    ICLR, 2026 · [arXiv:2602.01326](https://arxiv.org/abs/2602.01326)

15. **Continuous Diffusion Scales Competitively with Discrete Diffusion for Language**  
    Zhihan Yang, Wei Guo, Shuibai Zhang, Subham Sekhar Sahoo, Yongxin Chen, Arash Vahdat, Morteza Mardani, John Thickstun  
    arXiv, 2026 · [arXiv:2605.18530](https://arxiv.org/abs/2605.18530)

## Efficient Inference and Practical Speedups（p59–60）

1. **Accelerated Sampling from Masked Diffusion Models via Entropy Bounded Unmasking**  
    Heli Ben-Hamu, Itai Gat, Daniel Severo, Niklas Nolte, Brian Karrer  
    NeurIPS, 2025 · [arXiv:2505.24857](https://arxiv.org/abs/2505.24857)

2. **Beyond Autoregression: Fast LLMs via Self-Distillation Through Time**  
    Justin Deschenaux, Caglar Gulcehre  
    ICLR, 2025 · [arXiv:2410.21035](https://arxiv.org/abs/2410.21035)

3. **Distillation of Discrete Diffusion through Dimensional Correlations**  
    Satoshi Hayakawa, Yuhta Takida, Masaaki Imaizumi, Hiromi Wakaki, Yuki Mitsufuji  
    ICML, 2025 · [arXiv:2410.08709](https://arxiv.org/abs/2410.08709)

4. **Accelerating Diffusion LLMs via Adaptive Parallel Decoding**  
    Daniel Israel, Guy Van den Broeck, Aditya Grover  
    NeurIPS, 2025 · [arXiv:2506.00413](https://arxiv.org/abs/2506.00413)

5. **dKV-Cache: The Cache for Diffusion Language Models**  
    Xinyin Ma, Runpeng Yu, Gongfan Fang, Xinchao Wang  
    NeurIPS, 2025 · [arXiv:2505.15781](https://arxiv.org/abs/2505.15781)

6. **The Diffusion Duality**  
    Subham Sekhar Sahoo, Justin Deschenaux, Aaron Gokaslan, Guanghan Wang, Justin Chiu, Volodymyr Kuleshov  
    ICML, 2025 · [arXiv:2506.10892](https://arxiv.org/abs/2506.10892)

7. **Remasking Discrete Diffusion Models with Inference-Time Scaling**  
    Guanghan Wang, Yair Schiff, Subham Sekhar Sahoo, Volodymyr Kuleshov  
    NeurIPS, 2025 · [arXiv:2503.00307](https://arxiv.org/abs/2503.00307)

8. **Learning Unmasking Policies for Diffusion Language Models**  
    Metod Jazbec, Theo X. Olausson, Louis Béthune, Pierre Ablin, Michael Kirchhof, João Monteiro, Victor Turrisi, Jason Ramapuram, Marco Cuturi  
    ICML, 2026 · [arXiv:2512.09106](https://arxiv.org/abs/2512.09106)

9. **Flow Map Language Models: One-step Language Modeling via Continuous Denoising**  
    Chanhyuk Lee, Jaehoon Yoo, Manan Agarwal, Sheel Shah, Jerry Huang, Aditi Raghunathan, Seunghoon Hong, Nicholas M. Boffi, Jinwoo Kim  
    NeurIPS, 2026 · [arXiv:2602.16813](https://arxiv.org/abs/2602.16813)

10. **Diffusion Language Model Knows the Answer Before It Decodes**  
    Pengxiang Li, Yefan Zhou, Dilxat Muhtar, Lu Yin, Shilin Yan, Li Shen, Soroush Vosoughi, Shiwei Liu  
    ICLR, 2026 · [arXiv:2508.19982](https://arxiv.org/abs/2508.19982)  
    ※ ICLR 2026 の題名（スライドと同じ）。arXiv の題名は「Diffusion Language Models Know the Answer Before Decoding」

11. **dLLM-Cache: Accelerating Diffusion Large Language Models with Adaptive Caching**  
    Zhiyuan Liu, Yicun Yang, Yaojie Zhang, Junjie Chen, Chang Zou, Qingyan Wei, Shaobo Wang, Yichen Zhu, Linfeng Zhang  
    ICML, 2026 · [arXiv:2506.06295](https://arxiv.org/abs/2506.06295)

12. **Plan for Speed: Dilated Scheduling for Masked Diffusion Language Models**  
    Omer Luxembourg, Haim Permuter, Eliya Nachmani  
    ICML, 2026 · [arXiv:2506.19037](https://arxiv.org/abs/2506.19037)

13. **Stopping Computation for Converged Tokens in Masked Diffusion-LM Decoding**  
    Daisuke Oba, Danushka Bollegala, Masahiro Kaneko, Naoaki Okazaki  
    ICLR, 2026 · [arXiv:2602.06412](https://arxiv.org/abs/2602.06412)

14. **Fast-dLLM: Training-free Acceleration of Diffusion LLM by Enabling KV Cache and Parallel Decoding**  
    Chengyue Wu, Hao Zhang, Shuchen Xue, Zhijian Liu, Shizhe Diao, Ligeng Zhu, Ping Luo, Song Han, Enze Xie  
    ICLR, 2026 · [arXiv:2505.22618](https://arxiv.org/abs/2505.22618)

## Training Objectives（p68–69）

1. **Step-unrolled Denoising Autoencoders for Text Generation**  
    Nikolay Savinov, Junyoung Chung, Mikolaj Binkowski, Erich Elsen, Aaron van den Oord  
    ICLR, 2022 · [arXiv:2112.06749](https://arxiv.org/abs/2112.06749)

2. **Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models**  
    Marianne Arriola, Aaron Gokaslan, Justin T. Chiu, Zhihan Yang, Zhixuan Qi, Jiaqi Han, Subham Sekhar Sahoo, Volodymyr Kuleshov  
    ICLR, 2025 · [arXiv:2503.09573](https://arxiv.org/abs/2503.09573)

3. **Large Language Diffusion Models**  
    Shen Nie, Fengqi Zhu, Zebin You, Xiaolu Zhang, Jingyang Ou, Jun Hu, Jun Zhou, Yankai Lin, Ji-Rong Wen, Chongxuan Li  
    NeurIPS, 2025 · [arXiv:2502.09992](https://arxiv.org/abs/2502.09992)

4. **Generalized Interpolating Discrete Diffusion**  
    Dimitri von Rütte, Janis Fluri, Yuhui Ding, Antonio Orvieto, Bernhard Schölkopf, Thomas Hofmann  
    ICML, 2025 · [arXiv:2503.04482](https://arxiv.org/abs/2503.04482)

5. **Principled Self-Correction in Discrete Diffusion: A UCB-Guided Framework for Text Generation**  
    Masaki Asada, Makoto Miwa  
    EACL, 2026 · [ACL Anthology 2026.eacl-long.314](https://aclanthology.org/2026.eacl-long.314/)

6. **SDAR: A Synergistic Diffusion-AutoRegression Paradigm for Scalable Sequence Generation**  
    Shuang Cheng, Yihan Bian, Dawei Liu, Linfeng Zhang, Qian Yao, Zhongbo Tian, Wenhai Wang, Qipeng Guo, Kai Chen, Biqing Qi, Bowen Zhou  
    Findings of ACL, 2026 · [arXiv:2510.06303](https://arxiv.org/abs/2510.06303)

7. **Efficient-DLM: From Autoregressive to Diffusion Language Models, and Beyond in Speed**  
    Yonggan Fu, Lexington Whalen, Zhifan Ye, Xin Dong, Shizhe Diao, Jingyu Liu, Chengyue Wu, Hao Zhang, Enze Xie, Song Han, Maksim Khadkevich, Jan Kautz, Yingyan Celine Lin, Pavlo Molchanov  
    ICML, 2026 · [arXiv:2512.14067](https://arxiv.org/abs/2512.14067)

8. **Stop Training for the Worst: Progressive Unmasking Accelerates Masked Diffusion Training**  
    Jaeyeon Kim, Jonathan Geuter, David Alvarez-Melis, Sham Kakade, Sitan Chen  
    ICML, 2026 · [arXiv:2602.10314](https://arxiv.org/abs/2602.10314)

9. **Learn from Your Mistakes: Self-Correcting Masked Diffusion Models**  
    Yair Schiff, Omer Belhasin, Roy Uziel, Guanghan Wang, Marianne Arriola, Gilad Turok, Ran Zilberstein, Michael Elad, Volodymyr Kuleshov  
    NeurIPS, 2026 · [arXiv:2602.11590](https://arxiv.org/abs/2602.11590)

## Post-training and Alignment（p79–80）

1. **MDPO: Overcoming the Training-Inference Divide of Masked Diffusion Language Models**  
    Haoyu He, Katrin Renz, Yong Cao, Andreas Geiger  
    arXiv, 2025 · [arXiv:2508.13148](https://arxiv.org/abs/2508.13148)

2. **Reinforcing the Diffusion Chain of Lateral Thought with Diffusion Language Models**  
    Zemin Huang, Zhiyang Chen, Zijun Wang, Tiancheng Li, Guo-Jun Qi  
    NeurIPS, 2025 · [arXiv:2505.10446](https://arxiv.org/abs/2505.10446)

3. **d1: Scaling Reasoning in Diffusion Large Language Models via Reinforcement Learning**  
    Siyan Zhao, Devaansh Gupta, Qinqing Zheng, Aditya Grover  
    NeurIPS, 2025 · [arXiv:2504.12216](https://arxiv.org/abs/2504.12216)

4. **Discrete Diffusion Trajectory Alignment via Stepwise Decomposition**  
    Jiaqi Han, Austin Wang, Minkai Xu, Wenda Chu, Meihua Dang, Haotian Ye, Huayu Chen, Yisong Yue, Stefano Ermon  
    ICLR, 2026 · [arXiv:2507.04832](https://arxiv.org/abs/2507.04832)

5. **Diffusion-State Policy Optimization for Masked Diffusion Language Models**  
    Daisuke Oba, Hiroki Furuta, Naoaki Okazaki  
    NeurIPS, 2026 · [arXiv:2602.06462](https://arxiv.org/abs/2602.06462)

6. **Principled RL for Diffusion LLMs Emerges from a Sequence-Level Perspective**  
    Jingyang Ou, Jiaqi Han, Minkai Xu, Shaoxuan Xu, Jianwen Xie, Stefano Ermon, Yi Wu, Chongxuan Li  
    ICLR, 2026 · [arXiv:2512.03759](https://arxiv.org/abs/2512.03759)

7. **Improving Reasoning for Diffusion Language Models via Group Diffusion Policy Optimization**  
    Kevin Rojas, Jiahe Lin, Kashif Rasul, Anderson Schneider, Yuriy Nevmyvaka, Molei Tao, Wei Deng  
    ICLR, 2026 · [arXiv:2510.08554](https://arxiv.org/abs/2510.08554)

8. **wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models**  
    Xiaohang Tang, Rares Dolga, Sangwoong Yoon, Ilija Bogunovic  
    ICLR, 2026 · [arXiv:2507.08838](https://arxiv.org/abs/2507.08838)

9. **d2: Improving Reasoning in Diffusion Language Models via Trajectory Likelihood Estimation**  
    Guanghan Wang, Gilad Turok, Yair Schiff, Marianne Arriola, Volodymyr Kuleshov  
    ICML, 2026 · [arXiv:2509.21474](https://arxiv.org/abs/2509.21474)

10. **Revolutionizing Reinforcement Learning Framework for Diffusion Large Language Models**  
    Yinjie Wang, Ling Yang, Bowen Li, Ye Tian, Ke Shen, Mengdi Wang  
    ICLR, 2026 · [arXiv:2509.06949](https://arxiv.org/abs/2509.06949)

11. **SPG: Sandwiched Policy Gradient for Masked Diffusion Language Models**  
    Chenyu Wang, Paria Rashidinejad, DiJia Su, Song Jiang, Sid Wang, Siyan Zhao, Cai Zhou, Shannon Zejiang Shen, Feiyu Chen, Tommi Jaakkola, Yuandong Tian, Bo Liu  
    ICLR, 2026 · [arXiv:2510.09541](https://arxiv.org/abs/2510.09541)

12. **LLaDA 1.5: Variance-Reduced Preference Optimization for Large Language Diffusion Models**  
    Fengqi Zhu, Rongzhen Wang, Shen Nie, Xiaolu Zhang, Chunwei Wu, Jun Hu, Jun Zhou, Jianfei Chen, Yankai Lin, Ji-Rong Wen, Chongxuan Li  
    ACL, 2026 · [arXiv:2505.19223](https://arxiv.org/abs/2505.19223)

## Open Frontiers and Responsible Deployment（p110）

1. **CrowS-Pairs: A Challenge Dataset for Measuring Social Biases in Masked Language Models**  
    Nikita Nangia, Clara Vania, Rasika Bhalerao, Samuel R. Bowman  
    EMNLP, 2020 · [arXiv:2010.00133](https://arxiv.org/abs/2010.00133)

2. **BOLD: Dataset and Metrics for Measuring Biases in Open-Ended Language Generation**  
    Jwala Dhamala, Tony Sun, Varun Kumar, Satyapriya Krishna, Yada Pruksachatkun, Kai-Wei Chang, Rahul Gupta  
    FAccT, 2021 · [arXiv:2101.11718](https://arxiv.org/abs/2101.11718)

3. **Unmasking the Mask – Evaluating Social Biases in Masked Language Models**  
    Masahiro Kaneko, Danushka Bollegala  
    AAAI, 2022 · [arXiv:2104.07496](https://arxiv.org/abs/2104.07496)

4. **Stable Bias: Analyzing Societal Representations in Diffusion Models**  
    Alexandra Sasha Luccioni, Christopher Akiki, Margaret Mitchell, Yacine Jernite  
    NeurIPS Datasets and Benchmarks Track, 2023 · [arXiv:2303.11408](https://arxiv.org/abs/2303.11408)

5. **CBBQ: A Chinese Bias Benchmark Dataset Curated with Human-AI Collaboration for Large Language Models**  
    Yufei Huang, Deyi Xiong  
    LREC-COLING, 2024 · [arXiv:2306.16244](https://arxiv.org/abs/2306.16244)

6. **Evaluating and Mitigating Social Bias for Large Language Models in Open-ended Settings**  
    Zhao Liu, Tian Xie, Xueru Zhang  
    arXiv, 2024 · [arXiv:2412.06134](https://arxiv.org/abs/2412.06134)  
    ※ スライドの「OpenBBQ」。論文の中のベンチマークの名前は Open-BBQ

7. **Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations**  
    Jiho Jin, Woosung Kang, Junho Myung, Alice Oh  
    Findings of ACL, 2025 · [arXiv:2503.06987](https://arxiv.org/abs/2503.06987)  
    ※ スライドの「BBG」

8. **LaViDa: A Large Diffusion Language Model for Multimodal Understanding**  
    Shufan Li, Konstantinos Kallidromitis, Hritik Bansal, Akash Gokul, Yusuke Kato, Kazuki Kozuka, Jason Kuen, Zhe Lin, Kai-Wei Chang, Aditya Grover  
    NeurIPS, 2025 · [arXiv:2505.16839](https://arxiv.org/abs/2505.16839)

9. **The Diffusion Duality**  
    Subham Sekhar Sahoo, Justin Deschenaux, Aaron Gokaslan, Guanghan Wang, Justin Chiu, Volodymyr Kuleshov  
    ICML, 2025 · [arXiv:2506.10892](https://arxiv.org/abs/2506.10892)

10. **JBBQ: Japanese Bias Benchmark for Analyzing Social Biases in Large Language Models**  
    Hitomi Yanaka, Namgi Han, Ryoma Kumon, Jie Lu, Masashi Takeshita, Ryo Sekizawa, Taisei Kato, Hiromi Arai  
    GeBNLP Workshop at ACL, 2025 · [arXiv:2406.02050](https://arxiv.org/abs/2406.02050)

11. **ELF: Embedded Language Flows**  
    Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, Kaiming He  
    arXiv, 2026 · [arXiv:2605.10938](https://arxiv.org/abs/2605.10938)

12. **Flow Map Language Models: One-step Language Modeling via Continuous Denoising**  
    Chanhyuk Lee, Jaehoon Yoo, Manan Agarwal, Sheel Shah, Jerry Huang, Aditi Raghunathan, Seunghoon Hong, Nicholas M. Boffi, Jinwoo Kim  
    NeurIPS, 2026 · [arXiv:2602.16813](https://arxiv.org/abs/2602.16813)

13. **TrustLDM: Benchmarking Trustworthiness in Language Diffusion Models**  
    Yichuan Mo, Yukun Jiang, Yanbo Shi, Mingjie Li, Michael Backes, Yang Zhang, Yisen Wang  
    arXiv, 2026 · [arXiv:2606.00023](https://arxiv.org/abs/2606.00023)

14. **Beyond Model Weights: Sampling-Dependent Fairness in Diffusion Language Models**  
    Koshiro Saito, Daisuke Oba, Danushka Bollegala, Naoaki Okazaki  
    arXiv, 2026 · [arXiv:2610.27584](https://arxiv.org/abs/2610.27584)

<!-- 一旦ページに出さない（2026-11-06）。出すときは、この行と節の最後の行を消す
## Open Frontiers: Flow LMs（AACL_slide_add.pdf の p110–112）

1. **Large Flow Language Models**  
    Arnav Chavan, Chanhyuk Lee, Udbhav Bamba, Jaehoon Yoo, Seunghoon Hong, Aditi Raghunathan, Jinwoo Kim  
    arXiv, 2026 · [arXiv:2610.28559](https://arxiv.org/abs/2610.28559)  
    ※ スライドの「Lafa」

2. **Spherical Flows for Sampling Categorical Data**  
    Jannis Chemseddine, Gregor Kornhardt, Gabriele Steidl  
    NeurIPS, 2026 · [arXiv:2605.05629](https://arxiv.org/abs/2605.05629)

3. **Language Modeling with Hyperspherical Flows**  
    Justin Deschenaux, Caglar Gulcehre  
    arXiv, 2026 · [arXiv:2605.11125](https://arxiv.org/abs/2605.11125)  
    ※ スライドの「S-FLM」

4. **ELF: Embedded Language Flows**  
    Keya Hu, Linlu Qiu, Yiyang Lu, Hanhong Zhao, Tianhong Li, Yoon Kim, Jacob Andreas, Kaiming He  
    arXiv, 2026 · [arXiv:2605.10938](https://arxiv.org/abs/2605.10938)

5. **Flow Map Language Models: One-step Language Modeling via Continuous Denoising**  
    Chanhyuk Lee, Jaehoon Yoo, Manan Agarwal, Sheel Shah, Jerry Huang, Aditi Raghunathan, Seunghoon Hong, Nicholas M. Boffi, Jinwoo Kim  
    NeurIPS, 2026 · [arXiv:2602.16813](https://arxiv.org/abs/2602.16813)

6. **Continuous Diffusion Scales Competitively with Discrete Diffusion for Language**  
    Zhihan Yang, Wei Guo, Shuibai Zhang, Subham Sekhar Sahoo, Yongxin Chen, Arash Vahdat, Morteza Mardani, John Thickstun  
    arXiv, 2026 · [arXiv:2605.18530](https://arxiv.org/abs/2605.18530)
（ここまで一旦ページに出さない） -->
