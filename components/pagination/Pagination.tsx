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
  pagination,
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
            onChangeSelected(1, 0);
          }}
        >
          <img
            src={'/assets/images/icons/back-double-button.png'}
            alt="edit"
            style={{width: 10, height: 10, marginRight: 10}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page <= 1}
          onPress={() => {
            backPage(page);
            if (page !== 1) {
              onChangeSelected(page - 1, pagination - amountDataPerPage);
            }
          }}
        >
          <img
            src={'/assets/images/icons/back-button.png'}
            alt="edit"
            style={{width: 10, height: 10, marginRight: 10}}
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
            if (page !== Math.ceil(totalData / 8)) {
              onChangeSelected(page + 1, pagination + amountDataPerPage);
            }
          }}
        >
          <img
            src={'/assets/images/icons/next-button.png'}
            alt="edit"
            style={{width: 10, height: 10, marginRight: 10}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page === pageNumbers.length}
          onPress={() => {
            nextLastPage(pageNumbers);
            if (page !== Math.ceil(totalData / 8)) {
              onChangeSelected(
                Math.ceil(totalData / amountDataPerPage),
                totalData - 4,
              );
            }
          }}
        >
          <img
            src={'/assets/images/icons/next-double-button.png'}
            alt="edit"
            style={{width: 10, height: 10, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
