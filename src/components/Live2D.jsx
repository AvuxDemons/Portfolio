import { useEffect } from "react";

const Live2D = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://l2dwidget.js.org/lib/L2Dwidget.min.js";
        script.async = true;

        script.onload = () => {
            L2Dwidget.init({
                model: {
                    jsonPath: "/model/rem/model.json"
                },
                display: {
                    position: "right",
                    width: 300,
                    height: 400,
                    hOffset: -80,
                    vOffset: -80
                },
                mobile: {
                    show: true,
                    scale: 0.8
                },
                dialog: {
                    enable: false,
                    script: {
                        "every idle 10s": "Aku ingin bersamamu selamanya...",
                        "every idle 30s": "Apakah aku akan sendirian lagi ?",
                        "hover .star": "Bintang berada di langit, sedangkan kamu ada di hatiku (*/ω＼*)",
                        "tap body": "Ah, jangan menyentuhku!",
                        "tap face": "Apakah wajahku cantik hari ini ?"
                    }
                }
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="L2Dwidget" />;
};

export default Live2D;
