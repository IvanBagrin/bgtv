
import React, { useState } from "react";
import "../General.css"
function Plan({data}) {
    const [scroll, setScroll] = useState(false)
    document.title = "План";
    
      window.addEventListener('scroll', e => {
          if(document.body.scrollHeight - window.innerHeight - window.scrollY < 20) {
            setScroll(true)
          }
    })
    return (
        <div className="general plan container">
             <div className="general__h1 plan__h1">
                <h1 className = " general__h1-text">Плановые задания беспрестрастны</h1>
                    <div className="general__h1-wrap">
                    <p>Также как реализация намеченных плановых заданий принуждает нас беспристрастно востребовать существенных денежных и административных нюанс. Ко всему иному, последующее развитие разных форм деятельности дает обеспечение широкому кругу профессионалов роль в формировании последующих направлений развития. Задачка организации, неповторимо же сложившаяся структура организации разрешает выполнить принципиальные задания по разработке стандартных подходов.  </p>
                    
                    <p>Ежедневная как показывает практика, что неизменный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых соучастниками касательно намеченных целей. Похожим образом перспективное планирование выявляет срочную потребность экономических не экономических событий и перспектив. Таким макаром, оптимизация главных целей требуют определения и уточнения новых предложений. В целом, естественно, внедрение современных подходов играет определяющее значение для направлений прогрессивного развития. </p>
                    </div>
             </div>

             <div className="general general__h2 plan__h2">
             {data != null ? 
                <div>
                    <h2>{data.plan.h2.title}</h2>
                    {data.plan.h2.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div>  
                : ''}
             </div>

             {window.scrollY>500 && data != null ? 
                <div className="general general__h3 paln__h3">
                <div>
                    <h3>{data.plan.h3.title}</h3>
                    {data.plan.h3.text.map((item, index) => <p key = {index} dangerouslySetInnerHTML = {{__html:item}}/>)};
                </div> 
                </div> 
                : ''}
        </div>
    )
}

export default Plan;