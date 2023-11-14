import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { UserPreferences } from 'src/store/UserPreferences';

export const useGetUserPreferences = () => {
  const { searchParams } = useUrlManager();

  return new UserPreferences({
    padding: Number(searchParams.get(SearchParam.padding)),
    language: searchParams.get(SearchParam.language) as string,
    width: Number(searchParams.get(SearchParam.width)),
    title: searchParams.get(SearchParam.title) as string,
    theme: searchParams.get(SearchParam.theme) as string,
  });
};
