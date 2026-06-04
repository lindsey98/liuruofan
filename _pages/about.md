---
permalink: /
layout: archive
title: "Ruofan Liu's Personal Website"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

{% include base_path %}

<header class="site-hero">
    <h1>Ruofan Liu (刘若凡)</h1>
    <p class="site-hero__subtitle">Research Fellow in Computer Science, National University of Singapore</p>
</header>

<section class="intro">
  <p>
    I am a Research Fellow in the School of Computing at the National University of Singapore (NUS),
    where I also completed my Ph.D. under the supervision of
    <a href="https://www.comp.nus.edu.sg/~dongjs/">Prof. Jin Song Dong</a>.
    My research lies at the intersection of <strong>artificial intelligence and web security</strong>,
    with a particular focus on building trustworthy, vision-based systems for
    <strong>phishing detection</strong>, <strong>GUI testing</strong>, and <strong>reliable machine learning</strong>.
  </p>
  <p>
    My work has appeared at top-tier security, software engineering, and machine learning venues,
    including USENIX Security, ISSTA, ICLR, and NeurIPS. I am the lead author of several widely used
    open-source phishing detection systems, including
    <a href="https://github.com/lindsey98/Phishpedia">Phishpedia</a> and
    <a href="https://github.com/code-philia/PhishLLM">PhishLLM</a>.
  </p>
</section>

<section class="profile-section education">
<h2>📚 Education</h2>
  <ul>
  <li><em>2024.10 – Present.</em> Research Fellow in Computer Science, National University of Singapore (NUS). Research interest: AI for Web Security.</li>
  <li><em>2021.01 – 2024.10.</em> Ph.D. in Computer Science, National University of Singapore (NUS). Supervisor: <a href="https://www.comp.nus.edu.sg/~dongjs/">Prof. Jin Song Dong</a>.</li>
  <li><em>2016.08 – 2020.06.</em> B.S. in Statistics, National University of Singapore (NUS). FYP Supervisor: <a href="https://alexxthiery.github.io/">Prof. Alexandre Thiéry</a>.</li>
  </ul>
</section>

<section class="profile-section news">
  <h2>🔥 News</h2>
  <ul class="news-list">
    <li><em>2026.02</em> &mdash; Our paper <em>"TrainRef: Curating Data with Label Distribution and Minimal Reference for Accurate Prediction and Reliable Confidence"</em> is accepted at ICLR 2026!</li>
  </ul>
</section>

<section class="profile-section publications">
<h2>📝 Selected Publications</h2>

<ul class="pub-list">

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/trainref.png" alt="TrainRef">
  </div>
  <div class="pub-info">
    <span class="pub-venue">ICLR 2026</span>
    <span class="pub-authors">Murong Ma, <b>Ruofan Liu</b>, Yun Lin, Zhiyong Huang, and Jin Song Dong.</span>
    <span class="pub-title">TrainRef: Curating Data with Label Distribution and Minimal Reference for Accurate Prediction and Reliable Confidence</span>
    <div class="pub-links">
      <a href="https://openreview.net/pdf?id=jSs8CDsF0A"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/xaimm/TrainRef/tree/main"><i class="fa fa-github"></i>Code</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/guipilot.png" alt="GUIPilot">
  </div>
  <div class="pub-info">
    <span class="pub-venue">ISSTA 2025</span>
    <span class="pub-authors"><b>Ruofan Liu</b>, Xiwen Teoh, Yun Lin, Guanjie Chen, Ruofei Ren, Denys Poshyvanyk, and Jin Song Dong.</span>
    <span class="pub-title">GUIPilot: A Consistency-based Mobile GUI Testing Approach for Detecting Application-specific Bugs</span>
    <div class="pub-links">
      <a href="https://conf.researchr.org/details/issta-2025/issta-2025-papers/34/GUIPilot-A-Consistency-based-Mobile-GUI-Testing-Approach-for-Detecting-Application-s"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/code-philia/GUIPilot"><i class="fa fa-github"></i>Code</a>
      <a href="https://www.youtube.com/watch?v=V-MmsoIis_U"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/phishllm-thumb.png" alt="PhishLLM">
  </div>
  <div class="pub-info">
    <span class="pub-venue">USENIX Security 2024</span>
    <span class="pub-authors"><b>Ruofan Liu</b>, Yun Lin, Xiwen Teoh, Gongshen Liu, Zhiyong Huang, and Jin Song Dong.</span>
    <span class="pub-title">Less Defined Knowledge and More True Alarms: Reference-based Phishing Detection without a Pre-defined Reference List</span>
    <div class="pub-links">
      <a href="https://www.usenix.org/system/files/usenixsecurity24-liu-ruofan.pdf"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/code-philia/PhishLLM/"><i class="fa fa-github"></i>Code</a>
      <a href="https://youtu.be/FwnLaJ-wglA?si=ruEkPpsR8waWC1Jn"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/phishdecloaker-thumb.png" alt="PhishDecloaker">
  </div>
  <div class="pub-info">
    <span class="pub-venue">USENIX Security 2024</span>
    <span class="pub-authors">Xiwen Teoh, Yun Lin, <b>Ruofan Liu</b>, Zhiyong Huang and Jin Song Dong.</span>
    <span class="pub-title">PhishDecloaker: Detecting CAPTCHA-cloaked Phishing Websites via Hybrid Vision-based Interactive Models</span>
    <div class="pub-links">
      <a href="https://www.usenix.org/system/files/usenixsecurity24-teoh.pdf"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/code-philia/PhishDecloaker"><i class="fa fa-github"></i>Code</a>
      <a href="https://x.com/llmhyy/status/1801445397321420979"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/dynaphish-thumb.png" alt="DynaPhish">
  </div>
  <div class="pub-info">
    <span class="pub-venue">USENIX Security 2023</span>
    <span class="pub-authors"><b>Ruofan Liu</b>, Yun Lin, Yifan Zhang, Penn Han Lee, and Jin Song Dong.</span>
    <span class="pub-title">Knowledge Expansion and Counterfactual Interaction for Reference-Based Phishing Detection</span>
    <div class="pub-links">
      <a href="https://www.usenix.org/system/files/usenixsecurity23-liu-ruofan.pdf"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/code-philia/Dynaphish"><i class="fa fa-github"></i>Code</a>
      <a href="https://youtu.be/L-JrFWSnss0?si=eRiHFl5tkAq4VavB"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/phishintention-thumb.png" alt="PhishIntention">
  </div>
  <div class="pub-info">
    <span class="pub-venue">USENIX Security 2022</span>
    <span class="pub-authors"><b>Ruofan Liu</b>, Yun Lin, Xianglin Yang, Siang Hwee Ng, Dinil Mon Divakaran, Jin Song Dong.</span>
    <span class="pub-title">Inferring Phishing Intention via Webpage Appearance and Dynamics: A Deep Vision Based Approach</span>
    <div class="pub-links">
      <a href="https://www.usenix.org/system/files/sec22-liu-ruofan.pdf"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/lindsey98/PhishIntention"><i class="fa fa-github"></i>Code</a>
      <a href="https://youtu.be/yU7FrlSJ818"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

<li class="pub-item">
  <div class="pub-thumb">
    <img src="images/phishpedia-thumb.png" alt="Phishpedia">
  </div>
  <div class="pub-info">
    <span class="pub-venue">USENIX Security 2021</span>
    <span class="pub-authors">Yun Lin#, <b>Ruofan Liu</b>#, Dinil Mon Divakaran, Jun Yang Ng, Qing Zhou Chan, Yiwen Lu, Yuxuan Si, Fan Zhang, Jin Song Dong.</span>
    <span class="pub-title">Phishpedia: A Hybrid Deep Learning Based Approach to Visually Identify Phishing Webpages</span>
    <div class="pub-links">
      <a href="https://www.usenix.org/system/files/sec21-lin.pdf"><i class="fa fa-file-pdf"></i>Paper</a>
      <a href="https://github.com/lindsey98/Phishpedia"><i class="fa fa-github"></i>Code</a>
      <a href="https://youtu.be/ZQOH1RW5DmY"><i class="fa fa-youtube-play" style="color:red"></i>Video</a>
    </div>
  </div>
</li>

</ul>
<p style="font-size: 0.92em;">See the <a href="{{ base_path }}/publications/">full list of publications</a>.</p>
</section>

<section class="profile-section service">
   <h2>⚒️ Tools and Systems</h2>
        <ul>
            <li><a href="https://github.com/lindsey98/Phishpedia" class="tool-name">Phishpedia</a>: the first reference-based phishing website detector.</li>
            <li><a href="https://github.com/lindsey98/PhishIntention" class="tool-name">PhishIntention</a>: a reference-based phishing detector modelling both brand intention and credential-taking intention.</li>
            <li><a href="https://github.com/code-philia/Dynaphish" class="tool-name">DynaPhish</a>: a complementary module for reference-based phishing detectors with brand knowledge expansion and counterfactual interaction.</li>
            <li><a href="https://github.com/code-philia/PhishLLM" class="tool-name">PhishLLM</a>: an LLM-empowered phishing detector.</li>
            <li><a href="https://github.com/lindsey98/Influence_function_metric_learning" class="tool-name">Influence4Metric</a>: an influence-function-based explanation and debugging tool for deep metric learning tasks.</li>
        </ul>
</section>

<section class="profile-section awards">
<h2>🏆 Awards</h2>
  <ul>
  <li><em>2025.</em> China International College Students' Innovation Competition 2025 Silver Medal <br> 中国国际大学生创新大赛2025（互联网+）国际项目全国银奖（全国前0.01%）</li>
  <li><em>2025.</em> China International College Students' Innovation Competition 2025 (SEA) First Place <br> 中国国际大学生创新大赛2025（互联网+）国际项目东南亚赛区第一名</li>
  <li><em>2024.</em> China International College Students' Innovation Competition 2024 Bronze Medal <br> 中国国际大学生创新大赛2024（互联网+）国际项目全国铜奖（全国前0.04%）</li>
  <li><em>2024.</em> China International College Students' Innovation Competition 2024 (Shanghai) Silver Medal <br> 中国国际大学生创新大赛2024（互联网+）国际项目（上海赛区）专项赛银奖</li>
  <li><em>2024.</em> National University of Singapore Dean's Graduate Research Excellence Award</li>
  <li><em>2021.</em> National University of Singapore Research Achievement Award in 2021/2022 Sem 1</li>
  <li><em>2020.</em> Top 1 student in NUS Statistics Batch 2020</li>
  <li><em>2020.</em> Lijen Industrial Development Medal (Best Academic Exercise/Projects in the Discipline) in Academic Year 2019</li>
  <li><em>2020.</em> NTUC Medal in Academic Year 2019</li>
  <li><em>2020.</em> Saw Swee Hock Gold Medal in the Academic Year 2019</li>
  <li><em>2020.</em> SNAS Award 2020 (Singapore National Academy of Science)</li>
  </ul>
</section>

<section class="profile-section patent">
<h2>🏷 Patents</h2>
<ul>
  <li><em>2025.</em> Yun Lin, Guanjie Chen, Ruofei Ren, <b>Ruofan Liu</b>, Xiwen Teoh, Yuting Chen, Feng Yu, We Huang, Jinming Li, Liuhua Gong, Lili Gu. <em>GUI Software Testing System and Method Based on Requirement Design Drafts.</em> <b>CN202510267792.7</b></li>
  <li><em>2020.</em> Yun Lin, <b>Ruofan Liu</b>, Dinil Mon Divakaran, Jun Yang Ng, and Jin Song Dong. <em>Phishpedia: Towards an Approach of Phishing Identification with Visual Explanation.</em> Provisional patent filed in Singapore (Trustwave, Singtel). <b>NO. 10202011155P</b></li>
</ul>
</section>

<section class="profile-section service">
  <h2>💪 Service</h2>
  <ul>
    <li><em>2026.</em> Reviewer for AAAI 2026.</li>
    <li><em>2025.</em> Senior PC for CIKM 2025.</li>
    <li><em>2025.</em> Reviewer for NeurIPS 2025.</li>
    <li><em>2024.</em> Reviewer for the Transactions on Information Forensics &amp; Security.</li>
    <li><em>2023.</em> Reviewer for the 28th IEEE Pacific Rim International Symposium on Dependable Computing.</li>
  </ul>
</section>

<section class="profile-section contact">
    <h2>📞 Contact</h2>
    <ul>
      <li>Email: liu.ruofan16[at]u[dot]nus[dot]edu</li>
      <li>GitHub: <a href="https://github.com/lindsey98/">github.com/lindsey98</a></li>
      <li>Google Scholar: <a href="https://scholar.google.com/citations?user=g2M2UwsAAAAJ&hl=en">scholar.google.com</a></li>
    </ul>
</section>

<footer class="page-footer-note">
  <p>© 2026 Ruofan Liu. All rights reserved.</p>
</footer>
