/**
 *
 * @param dataArray
 * @param keysToMap
 * @returns
 */
export function mapArrayToKeys<T>(
  dataArray: T[],
  keysToMap: (keyof T)[]
): Partial<T>[] {
  return dataArray.map((item) => {
    const mappedItem: Partial<T> = {};
    keysToMap.forEach((key) => {
      if (item[key] !== undefined) {
        mappedItem[key] = item[key];
      }
    });
    return mappedItem;
  });
}

/**
 *
 * @returns
 */
export const getTokenFromStorageAndAuthorize = () => {
  const localStorageUser = JSON.parse(
    localStorage.getItem("aedas_user") ?? "{}"
  );

  if (!localStorageUser || !localStorageUser.token) {
    throw new Error("Authentication token is missing in local storage.");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorageUser.token}`,
    },
  };

  return config;
};
