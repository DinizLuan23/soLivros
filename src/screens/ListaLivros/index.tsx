import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import {
  Container,
  BotaoHeader,
  ContainerRow,
  NomeUsuario,
  ListagemDosLivros,
} from './style';
import {useNavigation} from '@react-navigation/native';
import {buscaLivros} from '../../services/livro';

export interface listaLivrosDTO {
  id: number;
  autor: string;
  imagem: string;
  nome: string;
};

const ListaLivros = () => {
  const navigation = useNavigation();
  const [listaDosLivros, setListaDosLivros] = useState<listaLivrosDTO[]>([]);

  useEffect(() => {
    const carregaLivros = async () => {
      const resposta = await buscaLivros();
      const json = await resposta.json();
      setListaDosLivros(json);
    };

    carregaLivros();
  }, []);
  return (
    <Container>
      <ContainerRow>
        <NomeUsuario>Olá, Renato</NomeUsuario>
        <ContainerRow>
          <BotaoHeader
            onPress={() => {
              navigation.navigate('ListaFavoritos');
            }}>
            <Icon name="heart" size={24} color="black" />
          </BotaoHeader>
          <BotaoHeader>
            <Icon name="search" size={24} color="black" />
          </BotaoHeader>
        </ContainerRow>
      </ContainerRow>
      <ListagemDosLivros
        numColumns={2}
        data={listaDosLivros}
        renderItem={({item}: {item: listaLivrosDTO}) => <Livro data={item} />}
        keyExtractor={(_, index) => {
          return 'item' + index;
        }}
      />
    </Container>
  );
};

export default ListaLivros;
