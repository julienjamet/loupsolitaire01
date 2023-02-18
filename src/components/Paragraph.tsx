import { FC, useState } from "react"
import { Paragraphs } from "../Data"
import { ILink } from "../Interfaces";

export const Paragraph: FC = () => {

    document.documentElement.scrollTop = 0;

    const [paragraph, setParagraph] = useState<number>(0)

    const handleClick = (link: ILink): void => {

        if (link.condition === undefined) {
            setParagraph(link.id)
        }
        else {
            alert(`Vous ne maîtrisez pas la discipline Kaï : ${link.condition} !`)
        }
    }

    return (
        <div className="main">
            {paragraph === 0 && <h1>Avertir le roi</h1>}
            {paragraph !== 0 && <h1>{paragraph}</h1>}

            <p id="p1">{Paragraphs[paragraph].text1}</p>

            {Paragraphs[paragraph].text2 && <p id="p2">{Paragraphs[paragraph].text2}</p>}
            {Paragraphs[paragraph].text3 && <p id="p3">{Paragraphs[paragraph].text3}</p>}

            <p id="p4">{Paragraphs[paragraph].decision}</p>

            <div className="buttons" id="buttons">
                {Paragraphs[paragraph].links.map((link) => (
                    <button className="button" onClick={() => handleClick(link)}>
                        {link.id}
                    </button>
                ))}
            </div>
        </div>
    )
}