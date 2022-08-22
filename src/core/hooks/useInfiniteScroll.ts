import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Company, CompanyResponse } from '@core/interfaces/company.interface';

const useInfiniteScroll = (
  getList: (page: number, limit?: number) => Promise<CompanyResponse>
): InfiniteScrollHookProps => {
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [nextPag, setNextPag] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompanyList = async () => {
      try {
        const companyResponse: CompanyResponse = await getList(nextPag);
        const { companies, nextPage } = companyResponse;

        setCompanyList(companies);
        setLoading(false);
        setNextPag(nextPage);
      } catch (error) {
        setCompanyList([]);
        setLoading(false);
      }
    };

    getCompanyList();
  }, []);

  const getMoreItems = async () => {
    const companyResponse: CompanyResponse = await getList(nextPag);
    const { companies, nextPage } = companyResponse;
    setNextPag(nextPage);
    const newList = companies;
    if (nextPage === null) {
      setHasMore(false);
    }
    setCompanyList(() => [...companyList, ...newList]);
    setLoading(false);
  };

  return {
    companyList,
    hasMore,
    getMoreItems,
    loading,
    setLoading,
  };
};

interface InfiniteScrollHookProps {
  companyList: Company[];
  hasMore: boolean;
  getMoreItems: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default useInfiniteScroll;
