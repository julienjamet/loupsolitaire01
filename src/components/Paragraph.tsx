import { FC, useState } from "react"
import { Paragraphs } from "../Data"
import { IClient, ILink } from "../Interfaces";

export const Paragraph: FC = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const [paragraph, setParagraph] = useState<number>(0)

    const client: IClient = {
        id: 123,
        skills: [],
        objects: [],
        gold: 0
    }

    const handleClick = (link: ILink): void => {

        if (link.skill !== undefined && !client.skills.includes(link.skill)) {
            alert(`Vous ne maîtrisez pas la discipline Kaï : ${link.skill} !`)
        }
        else if (link.object !== undefined && !client.objects.includes(link.object)) {
            alert(`Vous ne possédez pas l'objet : ${link.object} !`)
        }
        else if (link.gold !== undefined && client.gold < link.gold) {
            alert(`Vous ne possédez pas assez d'Or !`)
        }
        else {
            setParagraph(link.id)
        }
    }

    return (
        <div className="main">
            {paragraph === 0 && <h1>Avertir le roi</h1>}
            {paragraph !== 0 && <h1>{paragraph}</h1>}

            <p id="p1">{Paragraphs[paragraph].text1}</p>

            {Paragraphs[paragraph].text2 && <p id="p2">{Paragraphs[paragraph].text2}</p>}
            {Paragraphs[paragraph].text3 && <p id="p3">{Paragraphs[paragraph].text3}</p>}
            {Paragraphs[paragraph].text4 && <p id="p3">{Paragraphs[paragraph].text4}</p>}

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