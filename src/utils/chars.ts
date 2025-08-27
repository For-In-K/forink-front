export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatStatus = (status: string) => {
  if (status === 'IN_PROGRESS') return 'In progress';
  return capitalizeFirstLetter(status);
};

export const parseContent = (text: string) => {
  const sourcePattern =
    /\s*\[출처:\s*([^,\]]+)(?:,\s*([^,\]]+))?(?:,\s*([^\]]+))?\]/;
  const match = text.match(sourcePattern);

  if (match) {
    const mainContent = text.replace(sourcePattern, '').trim();
    const source = match[1]?.trim();
    const law = match[2]?.trim();
    const date = match[3]?.trim();

    return { mainContent, source, law, date };
  }

  return { mainContent: text, source: null, law: null, date: null };
};
