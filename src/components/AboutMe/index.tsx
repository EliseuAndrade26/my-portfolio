import {
  AboutMeSection,
  AboutMeSectionContent,
  AboutMeText,
  AboutMeTitle,
} from "./style";

export const AboutMe = () => {
  return (
    <AboutMeSection id="about-me">
      <AboutMeSectionContent>
        <AboutMeTitle
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey4"
        >
          About Me
        </AboutMeTitle>
        <AboutMeText as="p" type="body1" color="grey2">
          Sempre fui uma pessoa reservada e sem muitas ambições, uma pessoa
          tranquila que busca uma vida tranquila, buscando a oportunidade de
          conseguir uma vida estável, tranquila e feliz.
        </AboutMeText>
        <AboutMeText as="p" type="body1" color="grey2">
          Nasci em Governador Valadares(MG), porém fui para São Paulo bem cedo,
          durante minha vida morei em muitas cidades e atualmente estou morando
          em Campinas(SP).
        </AboutMeText>
        <AboutMeText as="p" type="body1" color="grey2">
          Formado em Front End e cursando Back End na Kenzie Academy Brasil. Já
          fiz muitos trabalhos pela internet como: Criação de Sites com
          WordPress, Edição de vídeos, Gestão de redes sociais, Moderação em
          lives, Criação de overlays para lives, entre outros. Quando fui
          moderador de lives ajudei a firmar parcerias com empresas como a
          Supercell (desenvolvedora de Clash of Clans e Clash Royale).
        </AboutMeText>
      </AboutMeSectionContent>
    </AboutMeSection>
  );
};
