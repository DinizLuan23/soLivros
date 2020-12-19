import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ContainerBotao, LivroImagem, NomeLivro, NomeAutor} from './style';
import {listaLivrosDTO} from '../../screens/ListaLivros';

interface LivroProps {
  data: listaLivrosDTO;
}

const Livro = (props: LivroProps) => {
  const navigation = useNavigation();
  return (
    <ContainerBotao
      onPress={() =>
        navigation.navigate('DetalheLivro', {
          livroId: props.data.id,
        })
      }>
      <LivroImagem resizeMode="cover" source={{uri: props.data.imagem}} />
      <NomeLivro>{props.data.nome}</NomeLivro>
      <NomeAutor>{props.data.autor}</NomeAutor>
    </ContainerBotao>
  );
};
export default Livro;
