import styled from 'styled-components/native';

export const BotaoHeader = styled.TouchableOpacity`
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 16px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  padding:16px
`;

export const NomeUsuario = styled.Text`
  flex: 1;
  font-size: 24px;
  margin-left:16px;
`;

export const SeusFavoritosTitulo = styled.Text`
  padding-left: 16px;
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: bold;
`;

export const NomeUsuarioNegrito = styled.Text`
  flex: 1;
  font-size: 24px;
  margin-left:16px;
  font-weight:bold;
`;

export const ListagemDosLivros = styled.FlatList`
  flex: 1;
`;
