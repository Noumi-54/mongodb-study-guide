import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

const MongoDBStudyGuide = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const chapters = [
    {
      id: 'intro',
      title: 'Introduction to MongoDB',
      pages: '15 pages',
      topics: [
        'What is MongoDB and why it exists',
        'Document databases vs relational databases',
        'BSON format and data types explained',
        'MongoDB ecosystem and tools overview',
        'Installation and setup considerations'
      ],
      resources: [
        { title: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/' },
        { title: 'MongoDB University Free Courses', url: 'https://university.mongodb.com/' },
        { title: 'MongoDB Architecture Guide', url: 'https://docs.mongodb.com/manual/core/databases-and-collections/' }
      ]
    },
    {
      id: 'schema',
      title: 'Schema Design Principles',
      pages: '25 pages',
      topics: [
        'Understanding data access patterns',
        'Embedding vs referencing strategies',
        'One-to-one, one-to-many, many-to-many relationships',
        'Schema validation with JSON Schema',
        'Document size considerations and limits',
        'Normalization vs denormalization tradeoffs',
        'Design patterns: Bucket, Outlier, Subset, Extended Reference'
      ],
      resources: [
        { title: 'MongoDB Schema Design Best Practices', url: 'https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design' },
        { title: 'Data Modeling Introduction', url: 'https://docs.mongodb.com/manual/core/data-modeling-introduction/' },
        { title: 'Schema Design Patterns', url: 'https://www.mongodb.com/blog/post/building-with-patterns-a-summary' }
      ]
    },
    {
      id: 'crud',
      title: 'CRUD Operations Deep Dive',
      pages: '20 pages',
      topics: [
        'Insert operations and batch inserts',
        'Query operators and complex conditions',
        'Update operators and atomic updates',
        'Delete operations and considerations',
        'Projection and field selection',
        'Cursor operations and iteration',
        'Bulk write operations for performance'
      ],
      resources: [
        { title: 'CRUD Operations Reference', url: 'https://docs.mongodb.com/manual/crud/' },
        { title: 'Query and Projection Operators', url: 'https://docs.mongodb.com/manual/reference/operator/query/' },
        { title: 'Update Operators', url: 'https://docs.mongodb.com/manual/reference/operator/update/' }
      ]
    },
    {
      id: 'indexing',
      title: 'Indexing Strategies and Optimization',
      pages: '30 pages',
      topics: [
        'How indexes work internally in MongoDB',
        'Single-field indexes',
        'Compound indexes and prefix rule',
        'Multikey indexes for arrays',
        'Text indexes for full-text search',
        'Geospatial indexes',
        'Hashed indexes for sharding',
        'Wildcard indexes for dynamic schemas',
        'Index intersection and selection',
        'Covering indexes and query performance',
        'Index overhead and memory usage',
        'Using explain() to analyze query plans'
      ],
      resources: [
        { title: 'Indexing Strategies', url: 'https://docs.mongodb.com/manual/applications/indexes/' },
        { title: 'Index Types', url: 'https://docs.mongodb.com/manual/indexes/' },
        { title: 'Query Plans and Performance', url: 'https://docs.mongodb.com/manual/tutorial/analyze-query-plan/' },
        { title: 'ESR Rule Explanation', url: 'https://www.mongodb.com/docs/manual/tutorial/equality-sort-range-rule/' }
      ]
    },
    {
      id: 'aggregation',
      title: 'Aggregation Framework Mastery',
      pages: '35 pages',
      topics: [
        'Aggregation pipeline concept and flow',
        'Stage-by-stage breakdown of all operators',
        '$match, $project, $group fundamentals',
        '$lookup for joins and relationships',
        '$unwind for array processing',
        '$facet for parallel pipelines',
        '$graphLookup for hierarchical data',
        'Window functions with $setWindowFields',
        '$bucket and $bucketAuto for analytics',
        '$merge and $out for writing results',
        'Optimization techniques and pipeline ordering',
        'Memory limits and allowDiskUse'
      ],
      resources: [
        { title: 'Aggregation Pipeline', url: 'https://docs.mongodb.com/manual/core/aggregation-pipeline/' },
        { title: 'Aggregation Operators', url: 'https://docs.mongodb.com/manual/reference/operator/aggregation/' },
        { title: 'Aggregation Pipeline Optimization', url: 'https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/' },
        { title: 'Practical Aggregation Book', url: 'https://www.practical-mongodb-aggregations.com/' }
      ]
    },
    {
      id: 'regex',
      title: 'Regular Expressions and Text Search',
      pages: '18 pages',
      topics: [
        'Regex fundamentals in MongoDB',
        'Pattern matching with $regex operator',
        'Case sensitivity and options',
        'Prefix, suffix, and contains patterns',
        'Performance implications of regex queries',
        'Index utilization with regex',
        'Text indexes vs regex comparison',
        'Full-text search capabilities',
        '$regexMatch, $regexFind, $regexFindAll',
        'Collation and locale-specific matching'
      ],
      resources: [
        { title: 'Regex in MongoDB', url: 'https://docs.mongodb.com/manual/reference/operator/query/regex/' },
        { title: 'Text Search', url: 'https://docs.mongodb.com/manual/text-search/' },
        { title: 'Collation Reference', url: 'https://docs.mongodb.com/manual/reference/collation/' }
      ]
    },
    {
      id: 'transactions',
      title: 'Transactions and Data Consistency',
      pages: '22 pages',
      topics: [
        'ACID properties in MongoDB',
        'Single document atomicity',
        'Multi-document transactions',
        'Transaction lifecycle and sessions',
        'Read concerns explained (local, majority, linearizable, snapshot)',
        'Write concerns and durability guarantees',
        'Read preferences and consistency',
        'When to use transactions vs atomic operations',
        'Performance impact of transactions',
        'Retryable writes and reads'
      ],
      resources: [
        { title: 'Transactions', url: 'https://docs.mongodb.com/manual/core/transactions/' },
        { title: 'Read Concern', url: 'https://docs.mongodb.com/manual/reference/read-concern/' },
        { title: 'Write Concern', url: 'https://docs.mongodb.com/manual/reference/write-concern/' },
        { title: 'Causal Consistency', url: 'https://docs.mongodb.com/manual/core/read-isolation-consistency-recency/' }
      ]
    },
    {
      id: 'replication',
      title: 'Replica Sets and High Availability',
      pages: '25 pages',
      topics: [
        'Replica set architecture',
        'Primary, secondary, and arbiter nodes',
        'Election process and failover',
        'Oplog and replication mechanics',
        'Read preference strategies',
        'Write concern in replica sets',
        'Replica set configuration',
        'Hidden and delayed members',
        'Priority and voting configuration',
        'Monitoring replica set health'
      ],
      resources: [
        { title: 'Replication', url: 'https://docs.mongodb.com/manual/replication/' },
        { title: 'Replica Set Configuration', url: 'https://docs.mongodb.com/manual/reference/replica-configuration/' },
        { title: 'Deploy Replica Set', url: 'https://docs.mongodb.com/manual/tutorial/deploy-replica-set/' }
      ]
    },
    {
      id: 'sharding',
      title: 'Sharding and Horizontal Scaling',
      pages: '28 pages',
      topics: [
        'Sharding architecture overview',
        'Config servers and mongos routers',
        'Shard key selection strategies',
        'Hashed vs ranged sharding',
        'Chunk distribution and balancing',
        'Shard key cardinality and monotonicity',
        'Zone sharding for geographic distribution',
        'Jumbo chunks and issues',
        'Queries in sharded clusters',
        'When to shard and scaling considerations'
      ],
      resources: [
        { title: 'Sharding', url: 'https://docs.mongodb.com/manual/sharding/' },
        { title: 'Shard Keys', url: 'https://docs.mongodb.com/manual/core/sharding-shard-key/' },
        { title: 'Sharding Strategies', url: 'https://www.mongodb.com/basics/sharding' },
        { title: 'Zone Sharding', url: 'https://docs.mongodb.com/manual/core/zone-sharding/' }
      ]
    },
    {
      id: 'storage',
      title: 'Storage Engine and Internals',
      pages: '20 pages',
      topics: [
        'WiredTiger storage engine architecture',
        'Document-level locking',
        'Compression algorithms (snappy, zlib, zstd)',
        'Checkpoints and journaling',
        'Cache and memory management',
        'Working set concept',
        'Storage engine tuning',
        'Write-ahead logging',
        'Data files and directory structure'
      ],
      resources: [
        { title: 'Storage Engines', url: 'https://docs.mongodb.com/manual/core/storage-engines/' },
        { title: 'WiredTiger', url: 'https://docs.mongodb.com/manual/core/wiredtiger/' },
        { title: 'Journaling', url: 'https://docs.mongodb.com/manual/core/journaling/' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Tuning and Optimization',
      pages: '30 pages',
      topics: [
        'Query optimization techniques',
        'Index selection and creation',
        'Projection to reduce data transfer',
        'Pagination strategies',
        'Cursor hints and optimization',
        'Connection pooling',
        'Batch operations for efficiency',
        'Avoiding common anti-patterns',
        'Profiler and slow query log',
        'Database profiling levels',
        'Monitoring and metrics'
      ],
      resources: [
        { title: 'Performance Best Practices', url: 'https://docs.mongodb.com/manual/administration/analyzing-mongodb-performance/' },
        { title: 'Database Profiler', url: 'https://docs.mongodb.com/manual/tutorial/manage-the-database-profiler/' },
        { title: 'Optimize Query Performance', url: 'https://docs.mongodb.com/manual/tutorial/optimize-query-performance-with-indexes-and-projections/' }
      ]
    },
    {
      id: 'security',
      title: 'Security and Authentication',
      pages: '22 pages',
      topics: [
        'Authentication mechanisms (SCRAM, x.509, LDAP)',
        'Role-based access control (RBAC)',
        'Built-in roles and custom roles',
        'Network security and binding',
        'TLS/SSL encryption',
        'Encryption at rest',
        'Field-level encryption',
        'Audit logging',
        'Security checklist for production'
      ],
      resources: [
        { title: 'Security Checklist', url: 'https://docs.mongodb.com/manual/administration/security-checklist/' },
        { title: 'Authentication', url: 'https://docs.mongodb.com/manual/core/authentication/' },
        { title: 'Authorization', url: 'https://docs.mongodb.com/manual/core/authorization/' },
        { title: 'Encryption', url: 'https://docs.mongodb.com/manual/core/security-encryption/' }
      ]
    },
    {
      id: 'backup',
      title: 'Backup and Disaster Recovery',
      pages: '18 pages',
      topics: [
        'Backup strategies overview',
        'mongodump and mongorestore',
        'Filesystem snapshots',
        'Cloud provider backups',
        'Point-in-time recovery',
        'Backup of sharded clusters',
        'Backup of replica sets',
        'Continuous backup with oplog',
        'Recovery procedures and testing'
      ],
      resources: [
        { title: 'Backup Methods', url: 'https://docs.mongodb.com/manual/core/backups/' },
        { title: 'mongodump', url: 'https://docs.mongodb.com/database-tools/mongodump/' },
        { title: 'MongoDB Cloud Backup', url: 'https://www.mongodb.com/cloud/atlas/backup' }
      ]
    },
    {
      id: 'mongoose',
      title: 'Node.js Integration with Mongoose',
      pages: '35 pages',
      topics: [
        'Mongoose ODM overview and benefits',
        'Schema definition in Mongoose',
        'Schema types and validation',
        'Virtual properties and methods',
        'Instance and static methods',
        'Middleware (pre and post hooks)',
        'Population for references',
        'Query building and chaining',
        'Aggregate with Mongoose',
        'Plugins and extensibility',
        'Connection management',
        'Best practices for production'
      ],
      resources: [
        { title: 'Mongoose Documentation', url: 'https://mongoosejs.com/docs/guide.html' },
        { title: 'Mongoose Schemas', url: 'https://mongoosejs.com/docs/guide.html' },
        { title: 'Mongoose Middleware', url: 'https://mongoosejs.com/docs/middleware.html' },
        { title: 'Mongoose Population', url: 'https://mongoosejs.com/docs/populate.html' }
      ]
    },
    {
      id: 'native',
      title: 'MongoDB Native Driver for Node.js',
      pages: '25 pages',
      topics: [
        'Native driver vs Mongoose comparison',
        'Connection and client setup',
        'CRUD with native driver',
        'Aggregation with native driver',
        'Transaction handling',
        'Change streams implementation',
        'GridFS for file storage',
        'Bulk operations',
        'Error handling patterns',
        'Performance considerations'
      ],
      resources: [
        { title: 'Node.js Driver', url: 'https://mongodb.github.io/node-mongodb-native/' },
        { title: 'Driver Quick Start', url: 'https://mongodb.github.io/node-mongodb-native/4.0/quick-start/quick-start/' },
        { title: 'Driver API Reference', url: 'https://mongodb.github.io/node-mongodb-native/4.0/classes/Collection.html' }
      ]
    },
    {
      id: 'express',
      title: 'Building APIs with Express and MongoDB',
      pages: '30 pages',
      topics: [
        'REST API architecture patterns',
        'Route organization and structure',
        'Controller pattern for handlers',
        'Service layer architecture',
        'Error handling middleware',
        'Request validation with Joi or express-validator',
        'Authentication middleware (JWT)',
        'Pagination and filtering',
        'Rate limiting and security',
        'API versioning strategies',
        'Documentation with Swagger/OpenAPI'
      ],
      resources: [
        { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html' },
        { title: 'REST API Best Practices', url: 'https://www.mongodb.com/developer/products/mongodb/nodejs-express-rest-api/' },
        { title: 'Express Middleware', url: 'https://expressjs.com/en/guide/using-middleware.html' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics and Features',
      pages: '25 pages',
      topics: [
        'Change streams for real-time updates',
        'Time-to-live (TTL) indexes',
        'Capped collections',
        'GridFS for large files',
        'Vector search for AI applications',
        'Time-series collections',
        'Atlas Search capabilities',
        'Data federation',
        'Atlas triggers and functions',
        'MongoDB Realm integration'
      ],
      resources: [
        { title: 'Change Streams', url: 'https://docs.mongodb.com/manual/changeStreams/' },
        { title: 'TTL Indexes', url: 'https://docs.mongodb.com/manual/core/index-ttl/' },
        { title: 'Time Series', url: 'https://docs.mongodb.com/manual/core/timeseries-collections/' },
        { title: 'Atlas Search', url: 'https://www.mongodb.com/docs/atlas/atlas-search/' }
      ]
    },
    {
      id: 'deployment',
      title: 'Production Deployment and DevOps',
      pages: '28 pages',
      topics: [
        'Production architecture planning',
        'Hardware and resource sizing',
        'Cloud deployment options',
        'MongoDB Atlas setup and features',
        'Docker containerization',
        'Kubernetes deployment',
        'Monitoring with Ops Manager',
        'Alerting and incident response',
        'Capacity planning',
        'Upgrade strategies',
        'Disaster recovery planning'
      ],
      resources: [
        { title: 'Production Notes', url: 'https://docs.mongodb.com/manual/administration/production-notes/' },
        { title: 'MongoDB Atlas', url: 'https://www.mongodb.com/cloud/atlas' },
        { title: 'Monitoring', url: 'https://docs.mongodb.com/manual/administration/monitoring/' },
        { title: 'Ops Manager', url: 'https://www.mongodb.com/products/ops-manager' }
      ]
    }
  ];

  const totalPages = chapters.reduce((sum, ch) => sum + parseInt(ch.pages), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-600">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-10 h-10 text-green-600" />
                <h1 className="text-4xl font-bold text-slate-800">
                  MongoDB Professional Study Guide
                </h1>
              </div>
              <p className="text-lg text-slate-600 mb-4">
                A comprehensive reference for mastering MongoDB, Node.js, Express, and Mongoose with deep theoretical knowledge and curated learning resources
              </p>
              <div className="flex gap-6 text-sm text-slate-500">
                <span>📖 {chapters.length} Chapters</span>
                <span>📄 {totalPages}+ Pages</span>
                <span>🔗 {chapters.reduce((sum, ch) => sum + ch.resources.length, 0)} Resources</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Download className="w-5 h-5" />
            How to Create Your Study Document
          </h2>
          <div className="text-blue-800 space-y-2">
            <p className="font-medium">This guide will help you create a comprehensive study document:</p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Copy each chapter's topics below</li>
              <li>Research each topic using the provided resource links</li>
              <li>Write detailed explanations in your own document</li>
              <li>Add your notes and understanding to each section</li>
              <li>Save as a Word document or PDF for offline study</li>
            </ol>
            <p className="text-sm mt-3 italic">
              Each chapter includes curated learning resources from MongoDB official documentation, tutorials, and expert guides to help you build deep understanding.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Table of Contents</h2>
          <div className="space-y-2">
            {chapters.map((chapter, idx) => (
              <div key={chapter.id} className="flex items-center gap-3 py-2 border-b border-slate-100">
                <span className="text-slate-500 font-mono text-sm w-8">{idx + 1}.</span>
                <span className="flex-1 text-slate-700 font-medium">{chapter.title}</span>
                <span className="text-sm text-slate-500">{chapter.pages}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chapters */}
        {chapters.map((chapter, idx) => (
          <div key={chapter.id} className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
            <button
              onClick={() => toggleSection(chapter.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-green-600 w-12">
                  {idx + 1}
                </span>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-800">{chapter.title}</h3>
                  <p className="text-sm text-slate-500">{chapter.pages}</p>
                </div>
              </div>
              {expandedSections[chapter.id] ? (
                <ChevronDown className="w-6 h-6 text-slate-400" />
              ) : (
                <ChevronRight className="w-6 h-6 text-slate-400" />
              )}
            </button>

            {expandedSections[chapter.id] && (
              <div className="border-t border-slate-200 p-6 bg-slate-50">
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {chapter.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">▸</span>
                        <span className="text-slate-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Learning Resources:
                  </h4>
                  <div className="space-y-2">
                    {chapter.resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-slate-200 transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700 group-hover:text-blue-700">
                          {resource.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Study Tips</h2>
          <div className="space-y-3 text-green-800">
            <p>• <strong>Follow the chapter order</strong> - Each chapter builds on previous concepts</p>
            <p>• <strong>Use the resource links</strong> - They provide official documentation and expert insights</p>
            <p>• <strong>Take notes</strong> - Write explanations in your own words to solidify understanding</p>
            <p>• <strong>Practice as you learn</strong> - Set up MongoDB and try each concept hands-on</p>
            <p>• <strong>Build projects</strong> - Apply multiple concepts together in real applications</p>
            <p>• <strong>Review regularly</strong> - Revisit earlier chapters as you progress</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-600 text-sm">
          <p>This study guide covers everything from MongoDB basics to production deployment.</p>
          <p className="mt-2">Use it as your roadmap to becoming a MongoDB expert.</p>
        </div>
      </div>
    </div>
  );
};

export default MongoDBStudyGuide;