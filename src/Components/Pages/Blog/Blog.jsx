const Blog = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen font-lato">
      <div className="w-1/2 mt-20">
        <h1 className="text-5xl font-extrabold text-[#361e31] mb-5">
          What is One way data binding?
        </h1>
        <p className="text-[#361e31]">
          In the context of front-end development, one-way data binding is a
          data flow mechanism where data is only allowed to flow in one
          direction, typically from the model (data source) to the view (UI).
          Changes in the model automatically update the view, ensuring that the
          view is always synchronized with the underlying data. However, changes
          in the view do not affect the model directly. React is an example of a
          library that primarily uses one-way data binding, where components
          re-render when their state or props change
        </p>
      </div>
      <div className="w-1/2 mt-20">
        <h1 className="text-5xl font-extrabold text-[#361e31] mb-5">
          What is NPM in node.js?
        </h1>
        <p className="text-[#361e31]">
          NPM stands for Node Package Manager, and it is the default package
          manager for Node.js. NPM is used to install, manage, and distribute
          Node.js packages and modules. It provides a command-line interface for
          developers to install libraries and packages from the NPM registry,
          manage project dependencies, and run scripts defined in a projects
          package.json file. NPM is a vital tool for Node.js developers to
          efficiently manage project dependencies and access a vast ecosystem of
          open-source packages.
        </p>
      </div>
      <div className="w-1/2 mt-20">
        <h1 className="text-5xl font-extrabold text-[#361e31] mb-5">
          Different between Mongodb database vs mySQL database
        </h1>
        <div className="text-[#361e31] space-y-2">
          <p>
            1. Data Model: MongoDB is a NoSQL database that uses a flexible,
            document-based data model. It stores data in JSON-like BSON
            documents, allowing for dynamic schemas. MySQL is a relational
            database that uses structured tables with predefined schemas. Query
            Language: MongoDB uses a query language that is similar to JSON.
          </p>
          <p>
            2. Query Language: MongoDB uses a query language that is similar to
            JSON. MySQL uses SQL (Structured Query Language) for querying data.
          </p>
          <p>
            3. Schema Flexibility: MongoDB is schema-less, allowing you to
            change the structure of documents without affecting existing data.
            MySQL has a fixed schema, and changes may require altering the table
            structure.
          </p>
          <p>
            4. Scaling: MongoDB is designed for horizontal scalability, making
            it suitable for handling large amounts of data and high traffic.
            MySQL can scale vertically but may require more complex setup for
            horizontal scaling.
          </p>
          <p>
            5. Data Integrity: MySQL enforces data integrity constraints through
            its relational model, supporting foreign keys, transactions, and
            ACID compliance. MongoDB offers weaker data integrity guarantees but
            is suitable for certain use cases where flexibility is more
            important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
