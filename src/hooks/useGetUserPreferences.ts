import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { UserPreferences } from 'src/store/UserPreferences';

export const useGetUserPreferences = () => {
  const { searchParams } = useUrlManager();

  const code = searchParams.get(SearchParam.code);

  return new UserPreferences({
    padding: Number(searchParams.get(SearchParam.padding)) || 64,
    language: searchParams.get(SearchParam.language) || 'javascript',
    width: Number(searchParams.get(SearchParam.width)) || 520,
    title: searchParams.get(SearchParam.title) || 'Untitled-1',
    theme: searchParams.get(SearchParam.theme) || 'hyper',
    font: searchParams.get(SearchParam.font) || 'hack',
    code: code ? atob(code) : '',
    darkMode: Boolean(searchParams.get(SearchParam.darkMode)) || true,
    background: Boolean(searchParams.get(SearchParam.background)) || true,
  });
};
