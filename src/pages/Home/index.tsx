import { 
    MagnifyingGlass, 
    PencilSimple, 
    FunnelSimple 
} from 'phosphor-react'

import { 
    Avatar,
    Button, 
    CardsContainer, 
    Container, 
    FormContainer, 
    HeaderContent, 
    HomeContainer, 
    SearchContent, 
    Title 
} from './styles'
import { Cards } from './components/Cards'

export function Home() {
    return (
        <HomeContainer>
            <Container>
                <HeaderContent>
                    <Avatar></Avatar>
                
                    <Title>
                        <h1>Meu Kanban</h1>
                        <PencilSimple size={35}/>
                    </Title>
                </HeaderContent>

                <SearchContent>
                    <Button>
                        <FunnelSimple size={30}/>
                        Filtrar
                    </Button>

                    <FormContainer action=''>
                        <MagnifyingGlass size={30} />
                        <input 
                            type='text' 
                            name='search' 
                            placeholder='Busque por cards, assuntos ou responsáveis...' 
                        />
                    </FormContainer>
                </SearchContent>

                <CardsContainer>
                    <div>
                        <Cards />
                        <Cards />
                    </div>

                    <div>
                        <Cards />
                        <Cards />
                    </div>

                    <div>
                        <Cards />
                        
                    </div>
                </CardsContainer>

            </Container>
        </HomeContainer>
    )
}