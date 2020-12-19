import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Rolagem = styled.ScrollView`
  flex: 1;
`;

export const ContainerDetalhes = styled.View`
  background-color: #e7f5f8;
  padding: 16px;
`;

export const ContainerDescricao = styled.View`
  padding: 16px;
  margin-top: 8px;
`;

export const ImagemLivro = styled.Image`
  height: 256px;
  width: 100%;
  margin-top: 24px;
`;

export const TituloLivro = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-top: 16px;
  font-weight: bold;
  color: black;
`;

export const NomeAutor = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #aaa;
`;

export const TituloDescricao = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ConteudoDescricao = styled.Text`
  color: #aaa;
  font-size: 16px;
`;

export const AddFavoritos = styled.TouchableOpacity`
  background-color: #023e89;
  height: 56px;
  border-radius: 8px;
  margin: 16px;
  justify-content: center;
  align-items: center;
`;

export const TextoBtnAddFavoritos = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: bold;
`;
