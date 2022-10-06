import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {PaginationStyleVariant} from './Pagination.styles';
import {PaginationProps} from './Pagination.types';

export const Pagination = ({
  currentPage,
  totalData,
  amountDataPerPage,
}: PaginationProps) => {
  const [page, setPage] = useState<number>(currentPage);
  const pageNumbers: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalData / amountDataPerPage); i++) {
    pageNumbers.push(i);
  }

  const back2Pages = (page: number) => {
    page === 2 ? setPage(page - 1) : setPage(page - 2);
  };

  const backPage = (page: number) => {
    setPage(page - 1);
  };

  const nextPage = (page: number) => {
    setPage(page + 1);
  };

  const next2Pages = (page: number, pageNumbers: Array<number>) => {
    page === pageNumbers.length - 1 ? setPage(page + 1) : setPage(page + 2);
  };

  return (
    <View style={PaginationStyleVariant.primary.container}>
      <View style={PaginationStyleVariant.primary.container}>
        <Pressable disabled={page <= 1} onPress={() => back2Pages(page)}>
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/back-double-button.png')}
          />
        </Pressable>

        <Pressable disabled={page <= 1} onPress={() => backPage(page)}>
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/back-button.png')}
          />
        </Pressable>

        <View style={PaginationStyleVariant.primary.pageNumberContainer}>
          <Text style={PaginationStyleVariant.primary.pageNumberText}>
            {page}
          </Text>
        </View>

        <Pressable
          disabled={page === pageNumbers.length}
          onPress={() => nextPage(page)}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/next-button.png')}
          />
        </Pressable>

        <Pressable
          disabled={page === pageNumbers.length}
          onPress={() => next2Pages(page, pageNumbers)}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/next-double-button.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};
