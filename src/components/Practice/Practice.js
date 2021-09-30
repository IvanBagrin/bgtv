import "./Practice.css"
import React, { useState } from "react";

function Practice({data}) {
    const [scroll, setScroll] = useState(false)
    document.title = "Практика";
    console.log(data)
    
      window.addEventListener('scroll', e => {
          if(document.body.scrollHeight - window.innerHeight - window.scrollY < 20) {
            setScroll(true)
          }
    })

    return (
        <div className="practice container">
            <div className="general__h1 practice__h1">  
             <h1 className = " general__h1-text">Практика социального развития текста</h1>
                <div className="general__h1-wrap">
                    <p>Каждодневная практика показывает, что социально-экономическое развитие играет основную роль в формировании системы масштабного конфигурации ряда черт. Если поглядеть если посмотреть с другой стороны постоянный количественный рост и сфера нашей активности есть интересный опыт проверки направлений прогрессивного развития?</p>
                    
                    <p>Практический опыт показывает, что постоянный количественный рост и сфера нашей активности дает обеспечение актуальность основных компонент планируемого обновления! Практический опыт показывает, что новая модель организационной деятельности способствует подготовке и реализации форм воздействия! Если поглядеть если посмотреть с другой стороны следующее развитие различных форм деятельности играет основную роль в формировании экономической необходимости принимаемых решений.</p>
                </div>
            </div>
            <div className="general__h2 practice__h2">
                {data != null ? 
                    <div>
                        <h2>{data.practice.h2.title}</h2>
                        {data.practice.h2.text.map((item, index) => <p key = {index}>{item}</p>)};
                    </div>  
                : ''}
            </div>
            
            {window.scrollY>500 && data != null ? 
                <div className="general__h3 practice__h2">
                <div>
                    <h3>{data.practice.h3.title}</h3>
                    {data.practice.h3.text.map((item, index) => <p key = {index}>{item}</p>)};
                </div> 
                </div> 
                : ''}
                 
            
            
        </div>
    )
}

export default Practice;