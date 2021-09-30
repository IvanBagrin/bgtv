import "./Innovation.css"
import React, { useState } from "react";

function Innovation({data}) {
    const [scroll, setScroll] = useState(false)
    document.title = "Инновации";
    console.log(data)
    
      window.addEventListener('scroll', e => {
          if(document.body.scrollHeight - window.innerHeight - window.scrollY < 20) {
            setScroll(true)
          }
    })


    
    return (
        <div className="innovation container">
             <div className="general__h1 innovation__h1">
                <h1 className="general__h1-text ">Инноваторский пусть новых шагов</h1>
                    <div className="general__h1-wrap ">
                        <p>Дорогие друзья, предстоящее развитие разных форм деятельности дает обеспечение актуальность позиций, занимаемых соучастниками касательно намеченных целей? Если посмотреть если поглядеть если посмотреть с другой стороны социально-экономическое развитие творит предпосылки отлично новых шагов для системы масштабного конфигурации ряда черт. </p>
                        
                        <p>Не стоит, но, забывать про то, что сложившаяся структура организации очень обуславливает творение направлений прогрессивного развития! Если посмотреть если поглядеть если посмотреть с другой стороны избранный нами инноваторский путь очень обуславливает творение последующих направлений развитая системы массового роли? Если посмотреть если поглядеть если посмотреть с другой стороны курс на социально-направленный городской проект просит от нас системного анализа модели развития!</p>
                
                    </div>
                    </div>

             <div className=" general__h2 innovation__h2">
             {data != null ? 
                <div>
                    <h2>{data.innovation.h2.title}</h2>
                    {data.innovation.h2.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div>  
                : ''}
             </div>

             {scroll && data != null ? 
                <div className="general__h3 innovation__h2">
                <div>
                    <h3>{data.innovation.h3.title}</h3>
                    {data.innovation.h3.text.map((item, index) => <p key = {index} dangerouslySetInnerHTML = {{__html:item}}/>)};
                </div> 
                </div> 
                : ''}
        </div>
    )
}

export default Innovation;