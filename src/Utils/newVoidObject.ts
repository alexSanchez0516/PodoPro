export function newEmptyObject(originalObject: any, id: number): any {
  const { id: originalId, ...rest } = originalObject;
  const emptyObject: any = {
    ...Object.fromEntries(Object.entries(rest).map(([key]) => [key, null])),
    id,
    isNew: true,
  };
  return emptyObject;
}
