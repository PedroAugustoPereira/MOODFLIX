import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { WatchTime } from "./WatchTime";

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.belongsToMany(User, { through: Favorite }); // relação de muitos para muitos com os ususarios, de acordo com favorite
Course.belongsToMany(User, { through: Like });
Course.hasMany(Episode, { as: "episodes" });
Course.hasMany(Favorite, { as: "FavoritesUsers", foreignKey: "course_id" }); //um curso pode ter varios registro na tebela favorite, para ussuarios diferentes

Episode.belongsTo(Course, { as: "Course" });
Episode.belongsToMany(User, { through: WatchTime });

Favorite.belongsTo(Course, { as: "Course" }); // um registro na tabela Favorite, pertence a um curso
Favorite.belongsTo(User); // um registro na tabela favorite, pertence a um usuario

User.belongsToMany(Course, { through: Favorite }); //relação de muitos para muitos com os cursos, de caordo com Favorite
User.belongsToMany(Course, { through: Like });
User.belongsToMany(Episode, { through: WatchTime });
User.hasMany(Favorite, { as: "FavoritesCourses", foreignKey: "user_id" }); // um usuario pode ter varios registr na table porém com cursos diferentes

export { Category, Course, Episode, Favorite, User, Like, WatchTime };
