import { useEffect } from "react";

const Live2D = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/javascript/L2Dwidget.min.js";
        script.async = true;

        script.onload = () => {
            L2Dwidget.init({
                model: {
                    jsonPath: "/model/rem/model.json"
                },
                display: {
                    position: "right",
                    width: 400,
                    height: 500,
                    hOffset: -50,
                    vOffset: -80
                },
                mobile: {
                    show: false,
                    scale: 0.8
                },
                dialog: {
                    enable: true,
                    script: {
                        "every idle 10000000s": [
                            "Halo , saya Rem. Saya berada disini sebagai pemandu anda ♡⸜(˶˃ ᵕ ˂˶)⸝♡",
                            "Hai , saya Rem. Saya akan menjadi pemandu anda ⸜(｡˃ ᵕ ˂ )⸝♡",
                            "Halo , saya pacar Avux , eh maksudnya saya Rem  (｡Ŏ ᗜ Ŏ ̆ ｡)",
                            "Perkenalkan , saya Rem. Saya sebagai tour guide disini  ˗ˋˏ ♡ ˎˊ˗",
                        ],
                        "hover .hero-title": "Berikut merupakan hobi Avux untuk mengisi waktu luang",
                        "hover .cta-btn--hero": [
                            "Kenali lebih lanjut mengenai Avux",
                            "Kenali lebih dalam tentang Pacar saya",
                        ],
                        "hover .about-wrapper__image": [
                            "Pacarku sangat tampan (づ_ど)",
                            "Avux memang idaman banget (,,>﹏<,,)",
                            "Ayangku gemes banget deh ( ⸝⸝´꒳`⸝⸝)",
                            "Iya , itu ayangku 👉👈"
                        ],
                        "hover .about-wrapper__info-text": "Pengenalan singkat mengenai Avux",
                        "hover .about-language": "Beberapa bahasa pemrograman yang dikuasai oleh Avux",
                        "hover .cta-btn--resume": "Ingin mengunjungi Github ?",
                        "hover .project-wrapper__text": "Project yang dibuat oleh Avux",
                        "hover .project-wrapper__image": "Itu adalah Preview projectnya",
                        "hover .project-wrapper__text-btns": "Ingin mengunjunginya ?",
                        "hover .contact-wrapper": "Apakah anda ingin mengobrol dengan Avux ?",
                        "hover .social-links": "Beberapa sosial media milik Avux",
                        "hover .back-to-top": "Kembali ke atas ?",
                        "tap body": [
                            "Ah, jangan menyentuhku!",
                            "Hei, apa yang kau sentuh itu!",
                            "Tolong jangan sentuh tubuh saya tanpa izin!",
                            "Saya merasa tidak nyaman saat orang lain memegang tubuh saya.",
                            "Pegangan tubuh seperti itu tidak pantas dan tidak diinginkan.",
                            "Saya ingin menjaga batasan pribadi saya, jadi harap jangan menyentuh tubuh saya tanpa izin.",
                            "Seperti halnya siapa pun, saya memiliki hak untuk menjaga keamanan dan privasi tubuh saya."
                        ],
                        "tap face": [
                            "Ah, jangan menyentuhku!",
                            "Apakah wajahku cantik hari ini?",
                            "Tolong jangan sentuh wajah saya tanpa izin!",
                            "Saya tidak nyaman saat orang lain memegang wajah saya.",
                            "Pegangan wajah seperti itu tidak sopan dan tidak pantas.",
                            "Saya lebih suka jika Anda menghormati batasan pribadi saya.",
                            "Wajah saya adalah milik Avux, harap jangan mengganggu atau menyentuhnya."
                        ]
                    }
                }
            });

            console.log(`
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣄⠀⠲⣿⠿⣿⣿⣿⣿⣿⠭⠭⡗⠂⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⡿⠋⢧⡀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠘⠒⠒⠛⠻⢭⣳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⢰⡿⠉⠳⡀⣠⣾⣿⡿⠟⠋⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣶⣄⢀⡶⠻⣟⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠘⢆⡀⠀⠛⠻⡍⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀⢳⡄⠀⠀⣴⡶⠀⠈⢹⠟⠛⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢠⣿⣷⠦⠴⠃⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠙⣤⣾⠏⠀⠀⠀⠘⠦⣤⣆⣴⣶⠾⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⣰⣿⣿⠇⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠶⠶⠶⢿⣿⢿⠟⠛⠛⠛⠀⠀⠀⠹⣿⡟⣆⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⣼⣿⠟⠁⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢧⡀⣠⡿⠃⠈⣇⠀⠀⠀⠀⠀⠈⣇⠸⣿⡘⣼⡇⣠⣶⡇⠀⠀⠀⠀⠀
            ⣺⠓⠲⠼⣯⡀⠀⢠⠆⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠸⡄⠹⣿⠁⠀⠀⠸⡆⠀⡇⢀⠀⢺⣿⣦⣿⣧⣿⣷⠟⠘⣷
            ⠣⣀⣀⣄⢀⡇⢀⡏⠀⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⣇⠀⠘⢦⡀⠀⠀⢳⠀⣧⠈⠆⢸⣿⠀⠙⣿⣿⣏⡀⢠⡏⠀⠀⠀⠀⠀
            ⠀⠀⢸⠏⠉⠀⣼⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⣽⠴⠶⠒⠳⣆⠀⠘⡇⣾⠀⠀⢸⣿⣤⣾⣿⣿⣟⢻⡿⠇⠀⠀⠀⠀⠀
            ⠀⠀⢸⠀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⢸⠀⠀⠀⠀⠈⠑⢄⣹⡇⠀⠀⠀⢧⡟⣹⡟⣿⣿⡀⢹⡆⠀⠀⠀⠀⠀
            ⠀⠀⡏⠀⠀⠀⡇⠀⠀⡇⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⣸⣤⠀⢀⠀⠀⠀⠀⠹⡇⠀⠀⡀⢸⣧⣿⠃⣿⣿⣧⢰⡇⠀⠀⠀⠀⠀
            ⠀⠀⡇⠀⠀⠀⡇⠀⠀⢳⠀⠀⠀⣇⠀⠀⠀⢻⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣿⣤⣶⣿⣿⣿⣶⣶⣢⡇⠀⢸⠇⢸⣿⣿⣀⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀
            ⠀⠀⢃⠀⠀⠀⢿⠀⠀⠸⡄⠀⠀⢸⡀⠀⠀⢸⡄⡇⠀⠀⠀⠀⠀⠀⠀⢸⠇⡿⢻⣿⡿⣿⣿⣿⡎⢻⠇⠀⣼⠀⡿⢋⢻⡟⠿⢹⣿⣧
            ⠀⠀⢸⠀⠀⠀⢸⡀⠀⠀⢧⠀⠀⠈⣧⠀⠀⠀⢧⢹⠀⠀⠀⠀⠀⠀⠀⢸⢠⠇⠈⣿⣤⡿⢃⣿⠃⢸⠀⢠⠇⢸⣵⠋⠀⡇⠀⢸⡇⣿⠀⠀⠀⠀⠀⠀
            ⠀⠀⠘⡇⠀⠀⠀⣇⠀⠸⡜⡆⠀⠀⠸⡄⠀⠀⠘⡎⣇⠀⠀⠀⠀⠀⠀⡞⢸⠀⠀⠈⠻⢦⡞⠋⠀⡟⠀⡜⢀⡮⡟⢷⠃⡟⠀⣾⡇⣿⡄⠀⠀⠀⠀⠀
            ⠀⠀⠀⢻⡀⠀⠀⠸⡄⠀⢹⡹⡄⠀⠀⢱⡀⠀⠀⠹⡽⡆⠀⠀⠀⠀⣸⣇⡇⠀⠀⠀⠀⠀⠀⠀⢰⠃⡼⠁⡞⡼⢁⡞⢰⡇⢸⢻⡇⢿⡇⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⢧⠀⠀⠀⠹⣄⠀⢳⡹⡄⠀⠀⠳⠀⢀⣀⠽⠿⠂⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⡼⢁⡜⠸⠛⠉⣰⣿⡇⡏⣸⡇⢸⡇⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠘⣆⣀⠀⠀⠘⢦⡀⢹⣽⡦⠖⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣧⣤⣾⣿⣿⡿⠀⣿⠁⣿⡇⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠘⢿⠳⣄⠀⠀⠉⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⡟⠁⢰⣿⠀⣿⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠈⢣⡘⣷⣤⡀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⡿⢋⣿⠋⠀⠀⣼⡇⠀⣿⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠙⢾⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⠇⠈⠀⠀⠀⠀⣿⠀⢰⣿⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⢸⡇⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠙⢻⣿⠿⢷⡶⠦⣤⣀⠀⠀⠀⣀⡴⠚⠁⢸⣵⡒⢦⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⣿⡇⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⣠⠖⠻⡄⠀⠀⠉⠉⠉⠁⠀⠀⣠⠋⠉⠙⣾⡇⠀⠀⠀⠀⠀⠀⠘⠋⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀
            ⠀⢀⡴⠚⠒⠞⠉⠓⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡈⠁⠀⠀⢹⠞⠙⢦⡀⢀⡴⠒⢶⠃⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠖⠛⣦⠤⠄⠀⢤⡀
            ⠀⢸⠀⠀⠀⠀⠀⠀⠀⠑⣄⣀⠀⠀⠀⠀⠀⠀⣀⣷⡀⠀⠀⠀⠀⠀⠀⢳⡞⠀⠀⠀⠀⠀⠀⡼⢥⣀⡀⠀⠀⠀⠀⠀⣀⣠⠞⠀⠐⠋⠁⠀⠀⠀⢸⠇
            ⠀⢸⠀⠀⠀⠀⠀⠀⠀⠠⡇⠀⠙⢦⣀⡤⠔⠚⠁⠈⠙⠦⠀⠀⡀⠀⠀⠘⠃⠀⠀⢠⡇⠀⠈⠀⠀⠀⠉⠉⠑⢲⡴⠚⠁⢸⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀
            ⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⢀⣹⣤⣴⣦⣤⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠇⠀⢀⡟⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀
            ⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⣟⠓⠀⠘⣿⠀⠀⠀⠀⠀⢀⣤⣾⣿⠟⢋⣿⣿⣿⡟⠿⣷⣦⣄⠀⠀⠀⠀⠀⠀⣸⡟⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⠀
            ⠀⠀⠀⠱⣄⠀⠀⠀⠀⠀⠘⣆⠀⠀⢻⡇⠀⠀⠀⢠⣿⡿⠋⠀⣠⣾⣿⠁⣿⣿⣄⠀⠉⠻⢿⣦⠀⠀⠀⣰⡟⠀⠀⣸⠂⠀⠀⠀⣀⣤⣤⠾⠋⠀⠀⠀
            ⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠘⠓⠀⠘⠿⠒⠀⠀⠀⣻⡳⠄⢞⠛⠛⠋⠀⢸⠟⡿⠆⠐⠀⢒⣿⠃⠐⠒⠛⠐⠒⠒⠃⠐⠒⠒⠛⠓⠚⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀

           █████╗ ██╗   ██╗██╗   ██╗██╗  ██╗   ██╗       ██╗ █████╗ ██╗███████╗██╗   ██╗
          ██╔══██╗██║   ██║██║   ██║╚██╗██╔╝   ██║  ██╗  ██║██╔══██╗██║██╔════╝██║   ██║
          ███████║╚██╗ ██╔╝██║   ██║ ╚███╔╝    ╚██╗████╗██╔╝███████║██║█████╗  ██║   ██║
          ██╔══██║ ╚████╔╝ ██║   ██║ ██╔██╗     ████╔═████║ ██╔══██║██║██╔══╝  ██║   ██║
          ██║  ██║  ╚██╔╝  ╚██████╔╝██╔╝╚██╗    ╚██╔╝ ╚██╔╝ ██║  ██║██║██║     ╚██████╔╝
          ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝     ╚═╝   ╚═╝  ╚═╝  ╚═╝╚═╝╚═╝      ╚═════╝ 
            `)
        };

        document.body.appendChild(script);
    }, []);

    return <div id="L2Dwidget" />;
};

export default Live2D;
