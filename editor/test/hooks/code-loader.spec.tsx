// import { renderHook, act } from '@testing-library/react-hooks';
// import { useEncoding } from '$hooks/encoding/encoding';
// import { useCodeLoader } from '$hooks/code-loader/code-loader';
//
// jest.mock('$hooks/encoding/encoding', () => ({
//   useEncoding: jest.fn(),
// }));
//
// describe('useCodeLoader', () => {
//   beforeEach(() => {
//     // Reset the mock before each test
//     jest.clearAllMocks();
//   });
//
//   it('should load and decode code correctly', () => {
//     const mockDecode = jest.fn((encodedString) => `Decoded: ${encodedString}`);
//     useEncoding.mockReturnValue({ decode: mockDecode });
//
//     const { result } = renderHook(() => useCodeLoader());
//
//     expect(result.current).toBeUndefined();
//
//     const mockUrlSearchParams = new URLSearchParams();
//     mockUrlSearchParams.set('code', 'encodedString');
//     global.URLSearchParams = jest.fn(() => mockUrlSearchParams);
//
//     act(() => {
//       result.current = useCodeLoader();
//     });
//
//     expect(mockDecode).toHaveBeenCalledWith('encodedString');
//     expect(result.current).toBe('Decoded: encodedString');
//   });
//
//   it('should return undefined if no code parameter is present', () => {
//     const { result } = renderHook(() => useCodeLoader());
//
//     expect(result.current).toBeUndefined();
//
//     const mockUrlSearchParams = new URLSearchParams();
//     global.URLSearchParams = jest.fn(() => mockUrlSearchParams);
//
//     act(() => {
//       result.current = useCodeLoader();
//     });
//
//     expect(result.current).toBeUndefined();
//   });
// });
