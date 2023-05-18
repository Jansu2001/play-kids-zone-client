const Blogs = () => {
  return (
    <div>
      <div className="border p-5 mb-5">
        <h1 className="text-3xl font-bold">
          Question:
          <span className="text-2xl font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </span>
        </h1>

        <h2>
          <span className="text-2xl font-bold">Answer: </span>
          <span>
            An access token and a refresh token are commonly used in
            authentication systems to grant and manage access to protected
            resources. Heres an overview of what they are and how they work
            <br />
          </span>
          <span>
            <span className="font-bold">Access Token:</span> <br /> An access
            token is a credential that is issued by an authentication server
            when a user successfully authenticates and authorizes an
            application. It represents the users permission to access specific
            resources or perform certain actions on a server. The access token
            contains information such as the users identity and permissions,
            along with an expiration time. It is typically a long, randomly
            generated string or a JSON Web Token (JWT) <br />
          </span>
          <span>
            <span className="font-bold">Refresh Token:</span> <br />A refresh
            token is a long-lived credential that is also issued by the
            authentication server during the authentication process. Its purpose
            is to obtain a new access token when the current one expires or
            becomes invalid without requiring the user to re-authenticate. The
            client securely stores the refresh token (usually in a secure cookie
            or local storage) and sends it to the server when the access token
            needs to be refreshed. The server verifies the refresh tokens
            validity and, if valid, issues a new access token to the client.
            This process allows for a seamless user experience by automatically
            obtaining new access tokens behind the scenes.
          </span>
        </h2>
      </div>
      <div className="border p-5 mb-5">
        <h1 className="text-3xl font-bold">
          Question:
          <span className="text-2xl font-semibold">
            Compare SQL and NoSQL databases?
          </span>
        </h1>

        <h2>
          <span className="text-2xl font-bold">Answer: </span>
          <span>
            SQL (Structured Query Language) and NoSQL (Not only SQL) are two
            types of database systems and QL and NoSQL databases differ in their
            data models and querying languages. SQL databases use a fixed schema
            and SQL language for structured data, while NoSQL databases offer
            flexibility with various data models and query languages. SQL
            databases prioritize strong consistency and ACID compliance, while
            NoSQL databases prioritize scalability and can handle unstructured
            data. SQL databases are commonly used in applications requiring
            complex querying and data integrity, while NoSQL databases are
            suitable for handling large volumes of rapidly changing data and
            high scalability needs.
            <br />
          </span>
        </h2>
      </div>
      <div className="border p-5 mb-5">
        <h1 className="text-3xl font-bold">
          Question:
          <span className="text-2xl font-semibold">
          What is MongoDB aggregate and how does it work
          </span>
        </h1>

        <h2>
          <span className="text-2xl font-bold">Answer: </span>
          <span>
            In MongoDB, the aggregate function is used to perform advanced data
            analysis and transformations on collections. It takes an array of
            pipeline stages as input, where each stage represents an operation
            or transformation. The stages are executed sequentially, with the
            output of one stage serving as the input for the next. Common stages
            include filtering, grouping, sorting, projecting, joining, and more.
            By combining these stages, the aggregate function allows for
            powerful data analysis and computation within MongoDB collections.
            Its a flexible and efficient tool for performing complex queries
            and aggregations on large volumes of data.
            <br />
          </span>
        </h2>
      </div>
      <div className="border p-5 mb-5">
        <h1 className="text-3xl font-bold">
          Question:
          <span className="text-2xl font-semibold">
            What is express js? and What is Nest JS ?
          </span>
        </h1>

        <h2>
          <span className="text-2xl font-bold">
            Answer: <br />
          </span>
          <span>
            <span className="font-bold">Express.js</span> is a lightweight and
            flexible web application framework for Node.js. It simplifies the
            process of building web applications and APIs by providing a minimal
            set of features and tools. With Express.js, developers can easily
            handle HTTP requests, define routes, and integrate middleware for
            tasks like authentication and error handling. Its simplicity and
            extensive ecosystem of middleware and plugins make it a popular
            choice among Node.js developers.
            <br />
          </span>
          <span>
            <span className="font-bold">NestJS</span> on the other hand, is a
            progressive Node.js framework inspired by Angular. It aims to
            provide a structured and scalable approach to server-side
            application development. NestJS utilizes TypeScript, decorators, and
            dependency injection to build modular and maintainable applications.
            It emphasizes code organization, reusability, and testability. By
            leveraging TypeScripts static typing and OOP principles, NestJS
            enables developers to create efficient and scalable server-side
            applications with ease.
            <br />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
