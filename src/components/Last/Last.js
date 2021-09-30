
import React, { useState } from "react";

function Last({data}) {
    const [scroll, setScroll] = useState(false)
    document.title = "Last";
    console.log(data)
    
      window.addEventListener('scroll', e => {
          if(document.body.scrollHeight - window.innerHeight - window.scrollY < 20) {
            setScroll(true)
          }
    })
    return (
        <div className="last container">
             <div className="general__h1 last__h1">
                <h1 className="general__h1-text">Ко всему иному последнее развитие</h1>
                    <div className="general__h1-wrap">
                    <p>Ко всему иному, перспективное планирование играет главную роль в формировании системы массового роли. В целом, естественно, реализация намеченных плановых заданий требуют от нас анализа экономических не экономических событий и перспектив. Надобно отметить, что неизменный количественный рост и сфера нашей активности играет определяющее значение для небывалых решений. Задачка организации, особенно же рамки, задачки и место обучения кадров выявляет срочную потребность инноваторских способов управления процессами. </p>
                    
                    <p>Стоит взвешивать, что внедрение современных подходов принуждает нас беспристрастно востребовать последующих направлений развития. Не стоит, но, забывать, что последующее развитие разных форм деятельности дает обеспечение широкому кругу профессионалов роль в формировании направлений прогрессивного развития. </p>
                    </div>
             </div>

             <div className="general__h2 last__h2">
             {data != null ? 
                <div>
                    <h2>{data.last.h2.title}</h2>
                    {data.last.h2.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div>  
                : ''}
             </div>

             {scroll && data != null ? 
                <div className="general__h3  last__h2">
                <div>
                    <h3>{data.last.h3.title}</h3>
                    {data.last.h3.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div> 
                </div> 
                : ''}
        </div>
    )
}

export default Last;