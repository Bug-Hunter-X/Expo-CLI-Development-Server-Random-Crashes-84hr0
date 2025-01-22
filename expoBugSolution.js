This solution focuses on improving logging and error handling to help identify the root cause of the crashes, even if we cannot prevent them outright.

```javascript
// expoBugSolution.js

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  useEffect(() => {
    const handleUnhandledRejection = (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    };

    const handleError = (error) => {
      console.error('An error occurred:', error);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <View>
      <Text>Expo App</Text>
    </View>
  );
};

export default App;
```