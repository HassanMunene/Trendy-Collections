![trendy collections ](https://github.com/user-attachments/assets/90244f11-8a95-4eb7-a7f4-a6cd8afca158)


# BACKEND ARCHITECTURE DECISIONS

## Database Layer Decision: MySQL2 over ORM

### Decision Rationale

In this project we have decided to use the [MySQL2](https://github.com/sidorares/node-mysql2) library directly instead of a full ORM like TypeORM or even Prisma for database operations. This is a deliberate choice that we have decided to to take after evaluating the specific needs of the administrator dashboard for trendy collections and the simplicity of using Mysql2 compared to having to work with ORM to access Mysql. Also the place we will deploy the application which is hostpinnacle for now.

1. **Performance-Centric Admin Dashboard** 
The administrator interface will probably require:
   - Complex reporting queries with multiple joins
   - High-frequency data updates
   - Real-time analytics display
and for this we think Mysql2 will give us an optimised performance as it provides direct SQL control.

2. **HostPinnacle Deployment Environment**  
The hosting provider we will be using has also influence our decision of using Mysql2:
- Due to limited memory we will have, Mysql2 will come in handy as is lightweight compared to ORMs
- Predictable query performance is critical for shared hosting resources.

3. **Technical Simplicity**  
   - Will definately eliminate ORM abstraction layer learning curve that is needed.
   - Reduces "magic" behavior that can obscure performance bottlenecks.
   - Provides transparent SQL visibility for debugging.


## Key Advantages of MySQL2 Approach

### 🚀 Performance Benefits
- **Faster execution**: Direct SQL queries avoid ORM abstraction overhead
- **Efficient memory usage**: Lower memory footprint than ORMs (~150KB vs 2MB+)
- **Optimized queries**: Hand-tuned SQL for complex admin dashboard reports

### 💪 Control & Flexibility
- **Full SQL capability**: Access to all MySQL features (window functions, CTEs, etc.)
- **Precise query optimization**: Ability to fine-tune every database operation
- **Direct transaction management**: Explicit control over `BEGIN`, `COMMIT`, `ROLLBACK`

### 🛡️ Security
- **Built-in parameter escaping**: Automatic prevention of SQL injection
- **Transparent operations**: Exactly know what SQL executes against your database
- **No "magic" behavior**: Avoid ORM-generated queries that might have performance pitfalls

### 📊 Ideal for Admin Dashboards
- **Complex reporting**: Efficient handling of analytics queries with multiple joins
- **Batch operations**: Better performance for bulk inserts/updates
- **Data-intensive operations**: Direct access to MySQL-specific optimizations

## Tradeoffs Considered

### ⚖️ Advantages vs. ORMs

| Criteria               | MySQL2                          | ORM (Sequelize/TypeORM)        |
|------------------------|---------------------------------|---------------------------------|
| Development Speed      | Moderate (write SQL manually)   | Fast (auto-generated queries)   |
| Learning Curve         | Requires SQL knowledge         | JavaScript-centric approach    |
| Database Portability   | MySQL-specific                 | Multi-database support         |
| Model Relationships    | Manual implementation          | Built-in associations          |
| Migration Support      | Requires separate tools        | Built-in migration system      |
| Performance           | ⚡ Faster                      | 🐢 Slower (abstraction layer)  |

### Potential Disadvantages
1. **More boilerplate code** for common CRUD operations
2. **Manual relationship handling** (joins, eager loading)
3. **No automatic migrations** (need separate migration system)
4. **Tight coupling to MySQL** (harder to switch databases later)