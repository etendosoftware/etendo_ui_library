/* Imports */
import React, {useState} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {PaginationStyleVariant} from './Pagination.styles';
import {PaginationProps} from './Pagination.types';

/* Pagination component */
export const Pagination = ({
  currentPage,
  onChangeSelected,
  totalData,
  amountDataPerPage,
}: PaginationProps) => {
  // Will serve to set the page number where the user is
  const [page, setPage] = useState<number>(currentPage);

  // This constant will count the number of pages that the data table will have based on the number of row
  // that the progammer wishes to display per page
  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(totalData / amountDataPerPage); i++) {
    pageNumbers.push(i);
  }

  /* Helper functions to page up or down */
  const backToFirstPage = () => {
    setPage(1);
  };

  const backPage = (page: number) => {
    setPage(page - 1);
  };

  const nextPage = (page: number) => {
    setPage(page + 1);
  };

  const nextLastPage = (pageNumbers: Array<number>) => {
    setPage(pageNumbers.length);
  };

  return (
    <View style={PaginationStyleVariant.primary.container}>
      <View style={PaginationStyleVariant.primary.container}>
        <TouchableOpacity
          disabled={page <= 1}
          onPress={() => {
            /* Allows to detect the selected item */
            backToFirstPage();
            onChangeSelected({
              name: '',
              route: '',
              key: '',
            });
          }}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/back-double-button.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page <= 1}
          onPress={() => {
            backPage(page);
            onChangeSelected({
              name: '',
              route: '',
              key: '',
            });
          }}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/back-button.png')}
          />
        </TouchableOpacity>

        {/* Text with layout to display the page number the user is on */}
        <View style={PaginationStyleVariant.primary.pageNumberContainer}>
          <Text style={PaginationStyleVariant.primary.pageNumberText}>
            {page}
          </Text>
        </View>

        <TouchableOpacity
          disabled={page === pageNumbers.length}
          onPress={() => {
            nextPage(page);
            onChangeSelected({
              name: '',
              route: '',
              key: '',
            });
          }}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/next-button.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page === pageNumbers.length}
          onPress={() => {
            nextLastPage(pageNumbers);
            onChangeSelected({
              name: '',
              route: '',
              key: '',
            });
          }}
        >
          <Image
            style={PaginationStyleVariant.primary.icon}
            source={require('../../assets/images/next-double-button.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
