import { FC, useState } from "react"
import { Paragraphs } from "../Data"

export const Paragraph: FC = () => {

    document.documentElement.scrollTop = 0;

    const [paragraph, setParagraph] = useState<number>(0)

    return (
        <div className="main">
            {paragraph === 0 && <h1>Avertir le roi</h1>}
            {paragraph !== 0 && <h1>{paragraph}</h1>}

            <p>{Paragraphs[paragraph].text1}</p>

            {Paragraphs[paragraph].text2 && <p>{Paragraphs[paragraph].text2}</p>}
            {Paragraphs[paragraph].text3 && <p>{Paragraphs[paragraph].text3}</p>}

            <p>{Paragraphs[paragraph].decision}</p>

            <div className="buttons">
                {Paragraphs[paragraph].links.map((link) => (
                    <button onClick={() => setParagraph(link)}>
                        {link}
                    </button>
                ))}
            </div>
        </div>

    )
}
