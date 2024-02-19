import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { UserPreferences } from 'src/store/UserPreferences';

export const useGetUserPreferences = () => {
  const { searchParams } = useUrlManager();

  const code = searchParams.get(SearchParam.CODE);

  return new UserPreferences({
    padding: Number(searchParams.get(SearchParam.PADDING)) || 64,
    language: searchParams.get(SearchParam.LANGUAGE) || 'javascript',
    width: Number(searchParams.get(SearchParam.WIDTH)) || 520,
    title: searchParams.get(SearchParam.TITLE) as string,
    theme: searchParams.get(SearchParam.THEME) || 'hyper',
    font: searchParams.get(SearchParam.FONT) || 'hack',
    code: code ? atob(code) : '',
    darkMode: searchParams.get(SearchParam.DARK_MODE)?.includes('true') ?? true,
    background: searchParams.get(SearchParam.BACKGROUND)?.includes('true') ?? true,
    fontSize: Number(searchParams.get(SearchParam.FONT_SIZE)) || 16,
  });
};
