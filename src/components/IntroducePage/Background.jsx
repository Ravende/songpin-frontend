import { useEffect, useRef } from "react";
import lofi from "../../assets/common/lo_fi_Icon.svg"
import hiphop from "../../assets/common/hiphop_Icon.svg"
import rock from "../../assets/common/rock_Icon.svg"
import pop from "../../assets/common/pop_Icon.svg"
import ballade from "../../assets/common/ballade_Icon.svg"
import main_center from "../../assets/introduce/main_center.svg";
import main_bottom from "../../assets/introduce/main_bottom.svg";


const Background = ()=>{
    const canvasRef = useRef(null);


    const icons = [
        { x: useRef(300), y: useRef(100), r: 38, vx: 3, vy: 3, img: lofi, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(100), r: 38, vx: -3, vy: 3, img: lofi, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(400), r: 30, vx: 3, vy: 3, img: hiphop, imgRef: useRef(null) },
        { x: useRef(1100), y: useRef(100), r: 30, vx: -3, vy: 5, img: hiphop, imgRef: useRef(null) },
        { x: useRef(200), y: useRef(300), r: 38, vx: 3, vy: 3, img: rock, imgRef: useRef(null) },
        { x: useRef(1100), y: useRef(200), r: 38, vx: -5, vy: 5, img: rock, imgRef: useRef(null) },
        { x: useRef(400), y: useRef(300), r: 32, vx: 3, vy: 3, img: pop, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(400), r: 32, vx: -3, vy: 3, img: pop, imgRef: useRef(null) },
        { x: useRef(100), y: useRef(100), r: 32, vx: 3, vy: 5, img: ballade, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(100), r: 32, vx: -3, vy: 5, img: ballade, imgRef: useRef(null) },
        { x: useRef(100), y: useRef(900), r: 32, vx: 3, vy: -5, img: ballade, imgRef: useRef(null) },
      ]; 

      const bigIcons = [
        {x: useRef(0), y: useRef(0), r:170, img: main_center, imgRef: useRef(null) },
        {x: useRef(0), y: useRef(0), r:272, img: main_bottom, imgRef: useRef(null) },
      ];
      const resizeCanvas = () => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

      // 첫 번째 큰 아이콘을 캔버스의 중앙에 위치
      const firstBigIcon = bigIcons[0];
      firstBigIcon.x.current =canvas.width/2 - firstBigIcon.r;
      firstBigIcon.y.current =60;
      // 두 번째 큰 아이콘을 캔버스의 바닥 중앙에 위치
      const secondBigIcon = bigIcons[1];
      secondBigIcon.x.current = canvas.width/2 - secondBigIcon.r;
      secondBigIcon.y.current = canvas.height - secondBigIcon.r;
      
      icons.forEach(icon => {
        const { x, y, r } = icon;
        if (x.current > canvas.width - r) x.current = canvas.width - r;
        if (x.current < r) x.current = r;
        if (y.current > canvas.height - r) y.current = canvas.height - r;
        if (y.current < r) y.current = r;
      });
  };


    useEffect(()=>{
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      
          window.addEventListener("resize", resizeCanvas);
          resizeCanvas();
        const createCircle=()=>{
            
            ctx.clearRect(0,0,canvas.width, canvas.height); //0,0 : 지우기를 시작할 사각형의 왼쪽 상단 모서리의 x,y 좌표 , width, height : 지울 영역의 너비와 높이 
            
            bigIcons.forEach((icon)=>{
                const {x,y,imgRef}=icon;   
                            ctx.drawImage(imgRef.current,x.current,y.current)
         })
            
            icons.forEach(icon => {
                const {x,y,r,imgRef,vx,vy}=icon;
                x.current+=vx;
                y.current+=vy;
                
                if(x.current>canvas.width-r || x.current<r) {icon.vx=-vx;}
                if(y.current>canvas.height-r || y.current<r) {icon.vy=-vy;}
                        // 각 아이콘이 큰 이미지와 충돌하는지 검사합니다.

                        bigIcons.forEach((bigIcon) => {
                          const bigX = bigIcon.x.current + bigIcon.r;
                          const bigY = bigIcon.y.current + bigIcon.r;
                          const dx = x.current - bigX;
                          const dy = y.current - bigY;
                          const distance = Math.sqrt(dx * dx + dy * dy);
                
                          if (distance < r + bigIcon.r) {
                            // 충돌 시, 반대 방향으로 튕겨나오도록 설정
                            icon.vx = -icon.vx;
                            icon.vy = -icon.vy;
                          }
          });
              
                ctx.drawImage(imgRef.current,x.current-r,y.current-r)

                
            })
        };
        const interval = setInterval(createCircle,10);
        return()=>{
            clearInterval(interval);  
            window.removeEventListener("resize", resizeCanvas)};
    },[])
return <>
<canvas  id="ballanimation" ref={canvasRef} width="1920" height="1080" style={{border:"none"}}/>
{icons.map((icon, index)=>(
    <img key={index} src={icon.img} ref={icon.imgRef} style={{display:"none"}}/>
))}
{
    bigIcons.map((icon, index)=>(
        <img key={index} src={icon.img} ref={icon.imgRef} style={{display:"none"}}/>
    ))
}
</>
}


export default Background;