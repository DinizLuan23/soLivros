import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Container,
  Rolagem,
  ContainerDetalhes,
  ImagemLivro,
  TituloLivro,
  NomeAutor,
  ContainerDescricao,
  TituloDescricao,
  ConteudoDescricao,
  AddFavoritos,
  TextoBtnAddFavoritos,
} from './style';
import {buscaDetalheLivro} from '../../services/livro';

interface DetalheLivroDTO {
  id: number;
  nome: string;
  autor: string;
  imagem: string;
  descricao: string;
}

const DetalheLivro = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [detalheLivro, setDetalheLivro] = useState<DetalheLivroDTO | null>(
    null,
  );

  useEffect(() => {
    const carregaDetalheLivro = async () => {
      const livroId = route.params.livroId;
      console.log('livroId', livroId);
      const resposta = await buscaDetalheLivro(livroId);
      const json = await resposta.json();
      console.log('buscaDetalheLivro', json);
      setDetalheLivro(json);
    };

    carregaDetalheLivro();
  }, []);

  if (detalheLivro === null) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size={42} color="#023E8A" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#E7f5f8" />
      <Container>
        <Rolagem>
          <ContainerDetalhes>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ImagemLivro
              resizeMode="contain"
              source={{uri: detalheLivro.imagem}}
            />
            <TituloLivro>{detalheLivro.nome}</TituloLivro>
            <NomeAutor>{detalheLivro.autor}</NomeAutor>
          </ContainerDetalhes>
          <ContainerDescricao>
            <TituloDescricao>Descrição</TituloDescricao>
            <ConteudoDescricao>{detalheLivro.descricao}</ConteudoDescricao>
          </ContainerDescricao>
        </Rolagem>
        <AddFavoritos>
          <TextoBtnAddFavoritos>Adicionar aos favoritos</TextoBtnAddFavoritos>
        </AddFavoritos>
      </Container>
    </>
  );
};

export default DetalheLivro;
