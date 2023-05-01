import { 
    DeviceTabletSpeaker, 
    Users, 
    FileText, 
    Gear 
} from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { BaseLinks, LinksPagesContainer, MenuContainer } from './styles'

export function Menu() {
    return (
        <MenuContainer>
                <div>
                    <img src={logo} alt="Imagem do logo" />
                </div>

                <LinksPagesContainer>
                    <BaseLinks>
                        <DeviceTabletSpeaker size={30}/> <a href="/">Boards</a>
                    </BaseLinks>

                    <BaseLinks>
                        <Users size={30}/> <a href="/equipes">Equipes</a>
                    </BaseLinks>

                    <BaseLinks>
                        <FileText size={30}/> <a href="/relatorios">Relatórios</a>
                    </BaseLinks>

                    <BaseLinks>
                        <Gear size={30}/> <a href="/ajustes">Ajustes</a>
                    </BaseLinks>
                </LinksPagesContainer>
        </MenuContainer>
    )
}