// ホタル挙動Local制御　参考URL : https://coco-factory.jp/ugokuweb/move02/5-7/

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,//この数値を変更するとホタルの数が増減できる
            "density": {
                "enable": true,
                "value_area": 1602.3971861905397
            }
        },
        "color": {
            "value": "#f3fa8b"//色
        },
        "shape": {
            "type": "circle",//形状はcircleを指定
            "stroke": {
                "width": 0,
            }
        },
        "opacity": {
            "value": 1,
            "random": true,//透過をランダムに
            "anim": {
                "enable": false,
                "speed": 1.10115236356258881,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4.005992965476349,
            "random": true,//サイズをランダムに
            "anim": {
                "enable": true,
                "speed": 24.345709068776642,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 6,//この数値を小さくするとゆっくりな動きになる
            "direction": "none",//方向指定なし
            "random": true,//動きはランダムに
            "straight": false,//動きをとどめない
            "out_mode": "out",//画面の外に出るように描写
            "bounce": false,//跳ね返りなし
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});