/* Imports */
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { paginationStyleVariant } from './Pagination.styles';
import { PaginationProps } from './Pagination.types';
import { ArrowLeftIcon } from '../../assets/images/icons/ArrowLeftIcon';
import { ArrowFirstIcon } from '../../assets/images/icons/ArrowFirstIcon';
import { ArrowRightIcon } from '../../assets/images/icons/ArrowRightIcon';
import { ArrowLastIcon } from '../../assets/images/icons/ArrowLastIcon';

/* Pagination component */
const Pagination = ({
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

  const backPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < Math.ceil(totalData / amountDataPerPage)) {
      setPage(page + 1);
    }
  };

  const nextLastPage = (pageNumbers: Array<number>) => {
    setPage(pageNumbers.length);
  };

  useEffect(() => {
    onChangeSelected(page, (page - 1) * amountDataPerPage);
  }, [page, amountDataPerPage, onChangeSelected]);

  return (
    <View style={paginationStyleVariant.primary.container}>
      <View style={paginationStyleVariant.primary.container}>
        <TouchableOpacity
          disabled={page <= 1 || totalData === 0}
          onPress={backToFirstPage}
        >
          <ArrowFirstIcon
            style={{
              height: 10,
              width: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page <= 1 || totalData === 0}
          onPress={backPage}
        >
          <ArrowLeftIcon
            style={{
              height: 10,
              width: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>

        {/* Text with layout to display the page number the user is on */}
        <View style={paginationStyleVariant.primary.pageNumberContainer}>
          <Text style={paginationStyleVariant.primary.pageNumberText}>
            {page}
          </Text>
        </View>

        <TouchableOpacity
          disabled={page === pageNumbers.length || totalData === 0}
          onPress={() => {
            nextPage();
          }}
        >
          <ArrowRightIcon
            style={{
              height: 10,
              width: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={page === pageNumbers.length || totalData === 0}
          onPress={() => {
            nextLastPage(pageNumbers);
            if (page !== Math.ceil(totalData / 8)) {
              onChangeSelected(
                Math.ceil(totalData / amountDataPerPage),
                totalData - (totalData % amountDataPerPage) - 8,
              );
            }
          }}
        >
          <ArrowLastIcon
            style={{
              height: 10,
              width: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;
