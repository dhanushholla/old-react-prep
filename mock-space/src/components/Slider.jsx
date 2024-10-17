import React, {useEffect,useRef, useState } from 'react'

const data =[{
    name:'movie1',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/987f7a42-438d-483e-95cd-77f3dfc6d03a/sqr/md/dde3e897-8fc6-458c-8de8-6fc483d6b18b.webp'
},
{
    name:'movie2',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/9a8f7e30-0dc6-4e43-894d-09eda719cd4a/sqr/md/88fbf5d4-9819-49a2-91cf-caba3208273e.webp'
},
{
    name:'movie3',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/171fff01-6f61-43fe-a1c2-4f343fbda83b/sqr/md/8df488a7-1f38-4603-876a-56429c6ab8b3.webp'
},
{
    name:'movie4',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/f3002cf0-7991-4945-ae3e-d5398a96d631/sqr/md/ef7ccbbd-f60e-4bd6-90cd-0b01b48fab3b.webp'
},
{
    name:'movie5',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/36689f1e-9765-49d5-93f6-e3fd18fea2ff/sqr/md/e6330ebe-2746-413f-91e8-da80e17af545.webp'
},
{
    name:'movie6',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/987f7a42-438d-483e-95cd-77f3dfc6d03a/sqr/md/dde3e897-8fc6-458c-8de8-6fc483d6b18b.webp'
},
{
    name:'movie7',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/9a8f7e30-0dc6-4e43-894d-09eda719cd4a/sqr/md/88fbf5d4-9819-49a2-91cf-caba3208273e.webp'
},
{
    name:'movie8',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/171fff01-6f61-43fe-a1c2-4f343fbda83b/sqr/md/8df488a7-1f38-4603-876a-56429c6ab8b3.webp'
},
{
    name:'movie9',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/f3002cf0-7991-4945-ae3e-d5398a96d631/sqr/md/ef7ccbbd-f60e-4bd6-90cd-0b01b48fab3b.webp'
},
{
    name:'movie10',
    img:'https://d1zz5uilqhcp39.cloudfront.net/PUBLISH_RECORD_SERIES/36689f1e-9765-49d5-93f6-e3fd18fea2ff/sqr/md/e6330ebe-2746-413f-91e8-da80e17af545.webp'
},
]

const Slider = () => {
    const [hovered,sethovered]=useState(null)
    const[searchval,setsearchval]=useState('')
    const [scrollDetails,setDetails]=useState({ scrollWidth: 0, clientWidth: 0, scrollLeft: 0 })
    const refArray =useRef([])
    const handleScrollNext = () =>{
        (document.getElementById('slider')).scrollLeft+=770
    }
    const handleScrollPrevious = () =>{
        (document.getElementById('slider')).scrollLeft-=770
    }
    const imgClick = (index) =>{
        refArray.current[index].scrollIntoView({behaviour:'smooth',inline:'center'})
        sethovered(index)
    }
    const searchChange =(e)=>{
        const inputValue = e.target.value;
        const reversedValue = inputValue.split('').reverse().join('');
        setsearchval(reversedValue);
    }
    useEffect(()=>{
       const slider =  document.getElementById('slider')
       slider.addEventListener('scroll', calculate);
        function calculate(){
            const{scrollWidth,clientWidth,scrollLeft}=(document.getElementById('slider'))
            setDetails({
                scrollWidth,clientWidth,scrollLeft
            })
        }
        calculate();
        return () =>{
            (document.getElementById('slider')).removeEventListener('scroll', calculate);
        }
       
    },[])

  return (
    <>
      <input type="search" value={searchval.split('').reverse().join('')} onChange={searchChange}/> <div>{searchval}</div>
      <div className='container'>Slide
        {(scrollDetails.scrollLeft>250) ? <button className='previousbtn' onClick={handleScrollPrevious}>{'<'}</button>:''}
        <div className="wrapper" id="slider">
            {data.map((ele,index) =>(
                <div key={`${index}_${ele.name}`} style={{display:'flex'}} className={hovered === index ? "hoveredClass":''} ref={(el)=>refArray.current[index]=el}>
                    <div style={{display:'flex',alignItems:'baseline', justifyContent:'start'}}>
                        <span style={{fontSize:'100px',position:'absolute',top:'110px',color:'whitesmoke'}}>{index+1}</span>
                        <img src={ele.img} onClick={()=>imgClick(index)} onMouseLeave={()=>sethovered(null)} alt="image here" width={250} height={200}></img>
                    </div>
                    {<div style={{visibility: hovered === index ? 'visible': 'hidden'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit! <p>Rating: ⭐️ {Math.floor(Math.random()*5)}/5</p></div>}
                </div>
            ))}
        </div>
        {(scrollDetails.scrollLeft < (scrollDetails.scrollWidth - scrollDetails.clientWidth -1)) ? <button className='nextbtn' onClick={handleScrollNext}>{'>'}</button>:""}
    </div>
    </>
    
  )
}

export default Slider


