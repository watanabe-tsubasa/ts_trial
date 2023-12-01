import { ReactNode, createContext } from 'react';

export const TestContext = createContext<string>('');

interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({ children }) => {

  const testText = 'success to get context'
  return (
    <TestContext.Provider value={testText}>
      {children}
    </TestContext.Provider>
  )
}