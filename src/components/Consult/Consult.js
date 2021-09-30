import React, { useState } from "react";
import "./Consult.css"
import "../General.css"

function Consult({data}) {
    const [scroll, setScroll] = useState(false)
    document.title = "Консультации";
    console.log(data)
    
      window.addEventListener('scroll', e => {
          if(document.body.scrollHeight - window.innerHeight - window.scrollY < 20) {
            setScroll(true)
          }
    })

    
    return (
      <div className="consult container">
          <div className="general__h1 consult__h1">
                <h1 className = " general__h1-text consult__h1-text">Консультация с широким активом</h1>
                <div className="general__h1-wrap consult__h1-wrap">
                    <p>
                        Схожим образом консультация с широким активом требуют определения и уточнения модели развития. Если посмотреть если поглядеть если посмотреть с другой стороны рамки и место обучения кадров содействует подготовки и реализации модели развития. Значимость этих заморочек так явна, что консультация с широким активом играет главную роль в формировании новых предложений. Ежедневная практика показывает, что укрепление и развитие структуры дает обеспечение широкому кругу (знатоков) роль в формировании следующих направлений развития.
                    </p>
                    <p>
                        Значимость этих заморочек так явна, что последующее развитие разных форм деятельности дает обеспечение широкому кругу (профессионалов) роль в формировании новых предложений. Если посмотреть если поглядеть если посмотреть с другой стороны укрепление и развитие структуры дает обеспечение роль в формировании систем массового роли. Значимость этих заморочек так явна, что последующее развитие разных форм деятельности дает обеспечение широкому кругу (профессионалов) роль в формировании новых предложений.
                    </p>
                </div>
          </div>

          <div className="general__h2 consult__h2">
            {data != null ? 
                <div>
                    <h2>{data.consult.h2.title}</h2>
                    {data.consult.h2.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div>  
                : ''}
                 
            </div>

            
            {scroll && data != null ? 
                <div className="general__h3 consult__h3">
                <div>
                    <h3>{data.consult.h3.title}</h3>
                    {data.consult.h3.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div> 
                </div> 
            : ''}

        </div>
    );
  }
  
  export default Consult;