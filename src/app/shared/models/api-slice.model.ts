export interface IApiSlice<D> {
  initialized: boolean;
  loading: boolean;
  data: D | null;
  error: string | null;
  finalized: boolean;
}

export const getDefaultApiSlice = <D>(
  defaultValue: Partial<IApiSlice<D>>,
): IApiSlice<D> => ({
  initialized: false,
  loading: false,
  data: null,
  error: null,
  finalized: false,
  ...defaultValue,
});
