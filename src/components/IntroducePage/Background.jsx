import { useEffect, useRef } from "react";
import lofi from "../../assets/common/lo_fi_Icon.svg"
import hiphop from "../../assets/common/hiphop_Icon.svg"
import rock from "../../assets/common/rock_Icon.svg"
import pop from "../../assets/common/pop_Icon.svg"
import ballade from "../../assets/common/ballade_Icon.svg"


const Background = ()=>{
    const canvasRef = useRef(null);

    const icons = [
        { x: useRef(300), y: useRef(100), r: 38, vx: 3, vy: 3, img: lofi, imgRef: useRef(null) },
        { x: useRef(1500), y: useRef(300), r: 38, vx: -3, vy: 3, img: lofi, imgRef: useRef(null) },
        { x: useRef(900), y: useRef(1000), r: 38, vx: 3, vy: -3, img: lofi, imgRef: useRef(null) },
        { x: useRef(800), y: useRef(100), r: 30, vx: 3, vy: 3, img: hiphop, imgRef: useRef(null) },
        { x: useRef(1600), y: useRef(400), r: 30, vx: -3, vy: 5, img: hiphop, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(1000), r: 30, vx: 3, vy: -5, img: hiphop, imgRef: useRef(null) },
        
        { x: useRef(1900), y: useRef(300), r: 38, vx: 3, vy: 6, img: rock, imgRef: useRef(null) },
        { x: useRef(200), y: useRef(1000), r: 38, vx: 5, vy: -5, img: rock, imgRef: useRef(null) },
        { x: useRef(1000), y: useRef(300), r: 32, vx: 4, vy: 6, img: pop, imgRef: useRef(null) },
        { x: useRef(1200), y: useRef(200), r: 32, vx: -4, vy: -6, img: pop, imgRef: useRef(null) },
        { x: useRef(200), y: useRef(600), r: 32, vx: 3, vy: 5, img: ballade, imgRef: useRef(null) },
        { x: useRef(1800), y: useRef(300), r: 32, vx: -3, vy: 5, img: ballade, imgRef: useRef(null) },
        { x: useRef(1000), y: useRef(400), r: 32, vx: 3, vy: -5, img: ballade, imgRef: useRef(null) },
        

      ]; 

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx= canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          };
      
          window.addEventListener("resize", resizeCanvas);
          resizeCanvas();
        const createCircle=()=>{
            
            ctx.clearRect(0,0,canvas.width, canvas.height);
            icons.forEach(icon => {
                const {x,y,r,imgRef,vx,vy}=icon;
                if(x.current>canvas.width-r || x.current<r) {icon.vx=-vx;}
                if(y.current>canvas.height-r || y.current<r) {icon.vy=-vy;}
                x.current+=icon.vx;
                y.current+=icon.vy;
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
</>
}


export default Background;