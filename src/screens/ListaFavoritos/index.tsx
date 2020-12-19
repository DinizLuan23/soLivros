import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import {
  Container,
  BotaoHeader,
  ContainerRow,
  NomeUsuario,
  ListagemDosLivros,
  NomeUsuarioNegrito,
  SeusFavoritosTitulo,
} from './style';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, Text} from 'react-native';

const ListaFavoritos = () => {
  const navigation = useNavigation();
  const [listaDosLivros, setListaDosLivros] = useState([1, 2, 3, 4]);
  return (
    <Container>
      <ContainerRow>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <NomeUsuario>
          Olá, <NomeUsuarioNegrito>Renato</NomeUsuarioNegrito>
        </NomeUsuario>
      </ContainerRow>
      <SeusFavoritosTitulo>Seus Favoritos</SeusFavoritosTitulo>
      <ListagemDosLivros
        numColumns={2}
        data={listaDosLivros}
        renderItem={(item) => <Livro />}
        keyExtractor={(item) => 'item' + item}
      />
    </Container>
  );
};

export default ListaFavoritos;
