import { 
    CardContent, 
    CardInfo,
    Description, 
    Tags 
} from "./styles";

export function Cards() {
    return (
        <CardContent>
            <h1>A fazer</h1>

            <CardInfo>
                <h4>#boraCodar um kanban 👨‍💻</h4>

                <Description>
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...
                </Description>

                <Tags>
                    <p>Rocketseat</p>
                    <p>desafio</p>
                </Tags>
            </CardInfo>
        </CardContent>
    )
}