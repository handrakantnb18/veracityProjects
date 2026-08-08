import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            MyBank
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Accounts.jsx">
                  Accounts
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Transactions
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="text-center text-primary">
          Hello World
        </h1>

        <p className="text-center">
          Welcome to the React.
        </p>
      </div>
    </>
  );
}

export default App;

// 1. Why is "String" immutable in Java?

// 2. How does "HashMap" work internally?

// 3. What happens when two keys have the same hashcode?

// 4. Why must "equals()" and "hashCode()" follow a contract?

// 5. "ArrayList" vs "LinkedList" — when would you use each?

// 6. "HashMap" vs "ConcurrentHashMap" — what's the real difference?

// 7. What happens if you modify a collection while iterating over it?

// 8. "synchronized" vs "volatile" — when would you use each?

// 9. How would you identify a deadlock in a Java application?

// 10. "Runnable" vs "Callable" — when would you choose each?

// 11. Why would you use "ExecutorService" instead of creating threads manually?

// 12. What problem does "CompletableFuture" solve?

// 13. How can a Java application have a memory leak despite having Garbage Collection?

// 14. Heap vs Stack — what is stored where?

// 15. What happens during a Full GC, and why can it affect API latency?

// 16. What happens if an exception is thrown inside a thread?

// 17. Why can "HashSet" detect duplicate objects incorrectly if "equals()" and "hashCode()" are implemented badly?

// 18. When would you use "Optional", and when should you avoid it?

// 19. Streams vs traditional loops — when would you prefer one over the other?

// 20. Your Java API suddenly becomes slow in production. What JVM-level metrics would you check first?


