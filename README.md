<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0d9488&height=180&section=header&text=HTTP+Range+Lab&fontSize=42&fontColor=ffffff&animation=fadeIn)
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1000&color=14B8A6&center=true&vCenter=true&width=650&lines=Explore+HTTP+byte-range+responses" alt="Project title"/>
[![License](https://img.shields.io/github/license/CyberLoop-dev/http-range-lab?style=for-the-badge)](LICENSE)
[![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/http-range-lab?style=for-the-badge)](https://github.com/CyberLoop-dev/http-range-lab)
[![Stars](https://img.shields.io/github/stars/CyberLoop-dev/http-range-lab?style=for-the-badge)](https://github.com/CyberLoop-dev/http-range-lab/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/http-range-lab?style=for-the-badge)](https://github.com/CyberLoop-dev/http-range-lab/commits/main)
<img src="assets/mark.svg" width="112" alt="HTTP Range Lab mark"/>
</div>

## 🧭 Overview
An interactive simulator for HTTP byte-range requests. Explore how a resource size and a `Range` header produce full responses, partial responses, or unsatisfiable-range errors.

## ✨ Features
- 📦 Supports closed, open-ended, and suffix byte ranges.
- 📏 Shows status code, selected byte interval, and `Content-Range`.
- 🧪 Covers boundary and unsatisfiable cases with automated tests.
- 📴 Simulates protocol behavior locally; it does not make network requests.

## 🖥️ Demo
No hosted demo is published. Run the local simulator.

## 🚀 Quick Start
```bash
npm start
```
Open http://127.0.0.1:4173. Run tests with `npm test`.

## 🧰 Tech Stack
Node.js built-in HTTP server, browser JavaScript, HTML, and CSS. No third-party dependencies.

## 🗂️ Folder Structure
```text
http-range-lab/
├── public/       # UI and range parser
├── tests/        # Node test runner
├── assets/       # Original SVG mark
├── .github/      # CI workflow
├── server.js
└── package.json
```

## 🛣️ Roadmap
- [x] Closed, open-ended, and suffix range simulation.
- [x] 206 and 416 response modeling.
- [ ] Add multipart/byteranges visualization.

## 🤝 Contributing
Contributions are welcome. Add protocol examples and tests for each new range behavior.

## 📄 License
MIT — see [LICENSE](LICENSE).

<div align="center">
![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,100:0f172a&height=110&section=footer)
</div>
