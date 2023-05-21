import React from "react";
import Faq from "react-faq-component";

const Blogs = () => {
  const data = {
    rows: [
      {
        title:
          "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
        content: `Access Token and Refresh Token:
        <br/>
 ==> Access Token: An access token is a credential that is used to authenticate and authorize access to protected resources. It is typically a JSON Web Token (JWT) that contains information about the user and permissions. Access tokens have a limited lifespan and are used to access protected API endpoints.
 <br/><br/>
 ==> Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is used to maintain the user's session and avoid the need for the user to log in again. Refresh tokens are securely stored and are typically issued alongside an access token.
 <br/> <br/>
 How they work: When a user logs in or authenticates, an access token and a refresh token are issued by the authentication server. The access token is sent with each API request to authenticate and authorize access. If the access token expires, the refresh token is used to request a new access token without requiring the user to provide their credentials again. The refresh token is exchanged for a new access token, and the process continues.

Storage on the client-side: Access tokens and refresh tokens should be securely stored on the client-side. Common approaches include:
<br/>
-- Storing them in memory variables or local storage (if protected against XSS attacks).<br/>
-- Storing them in secure HTTP-only cookies.<br/>
-- Using browser storage mechanisms such as sessionStorage.
 `,
      },
      {
        title: "Compare SQL and NoSQL databases?",
        content: `
          Key differences:
          <br/> <br/>
          ==> Data Model: SQL databases have a predefined schema and use tables with rows and columns, whereas NoSQL databases have a flexible schema and use various data models like key-value, document, columnar, or graph.
          <br/>
          ==> Scalability: SQL databases typically scale vertically (by increasing hardware resources), while NoSQL databases can scale horizontally (by adding more servers/nodes to the database cluster).
        <br/>
         ==> Query Language: SQL databases use SQL for querying and manipulating data, while NoSQL databases have their own query languages or APIs specific to their data model. <br/>
           ==> Data Relationships: SQL databases handle complex relationships between tables using joins, whereas NoSQL databases denormalize data to avoid complex joins and maintain data within a single document or collection. <br/>
          `,
      },
      {
        title: "What is express js? What is Nest JS ?",
        content: `
        ==> Express.js:
Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js offers various features like routing, middleware support, template engines, and simplified HTTP request/response handling. It follows the middleware pattern, where incoming HTTP requests pass through a chain of middleware functions, allowing developers to handle requests, perform validations, and modify responses.
<br/>
<br/>
==> NestJS:
NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and incorporates concepts from object-oriented programming, functional programming, and reactive programming. NestJS follows a modular architecture and uses decorators, providers, and modules to structure the application. It provides features like dependency injection, middleware support, routing, and integration with various tools and libraries.
`,
      },
      {
        title: "What is MongoDB aggregate and how does it work ?",
        content: (
          <div>
            <p>
              <strong>What is MongoDB aggregate and how does it work?</strong>
            </p>
            <p>
              In MongoDB, the aggregation framework is a powerful tool for
              performing data analysis and manipulation operations on the data
              stored in the database. The aggregation framework allows you to
              process and transform data using a set of pipeline stages, such as
              filtering, grouping, sorting, and performing calculations.
            </p>
            <p>
              The MongoDB aggregation pipeline consists of a sequence of stages,
              where each stage takes the input documents and processes them to
              produce an output. The output of one stage becomes the input for
              the next stage, allowing for a series of transformations and
              computations on the data.
            </p>
            <p>Here's an overview of how the aggregation framework works:</p>
            <ol>
              <li>
                <p>
                  <strong>Match Stage:</strong> The initial stage is usually the{" "}
                  <code>$match</code> stage, which filters the documents based
                  on certain criteria. It allows you to select a subset of
                  documents that match specific conditions.
                </p>
              </li>
              <li>
                <p>
                  <strong>Projection Stage:</strong> The <code>$project</code>{" "}
                  stage is used to reshape the documents and include or exclude
                  specific fields. It can be used to rename fields, create
                  computed fields, or exclude unnecessary fields from the
                  output.
                </p>
              </li>
              <li>
                <p>
                  <strong>Group Stage:</strong> The <code>$group</code> stage is
                  used to group documents together based on a specified key or
                  keys. It allows you to perform calculations or aggregations on
                  the grouped data, such as calculating the sum, average, or
                  count.
                </p>
              </li>
              <li>
                <p>
                  <strong>Sort Stage:</strong> The <code>$sort</code> stage is
                  used to sort the documents based on one or more fields in
                  ascending or descending order. It can be useful for ordering
                  the output in a specific way.
                </p>
              </li>
              <li>
                <p>
                  <strong>Other Stages:</strong> MongoDB provides many other
                  stages that can be used in the aggregation pipeline, such as{" "}
                  <code>$limit</code> (to limit the number of documents),{" "}
                  <code>$skip</code> (to skip a certain number of documents),{" "}
                  <code>$lookup</code> (to perform a left outer join with
                  another collection), and more. These stages offer additional
                  flexibility and functionality in manipulating the data.
                </p>
              </li>
            </ol>
            <p>
              The aggregation framework allows you to chain these stages
              together to create complex data transformation pipelines. Each
              stage operates on the documents from the previous stage and passes
              the transformed data to the next stage until the final result is
              obtained.
            </p>
            <p>
              By leveraging the aggregation framework, you can perform advanced
              data analysis, generate reports, extract meaningful insights, and
              aggregate data in a flexible and efficient manner within MongoDB.
            </p>
          </div>
        ),
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "#0d9488",
    rowTitleColor: "#0d9488",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <div className="container mx-auto my-12">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default Blogs;
