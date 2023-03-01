"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFindFirstArgsSchema = exports.NestedDecimalWithAggregatesFilterSchema = exports.NestedIntNullableFilterSchema = exports.NestedStringNullableWithAggregatesFilterSchema = exports.NestedStringWithAggregatesFilterSchema = exports.NestedFloatFilterSchema = exports.NestedIntWithAggregatesFilterSchema = exports.NestedDecimalFilterSchema = exports.NestedStringNullableFilterSchema = exports.NestedStringFilterSchema = exports.NestedIntFilterSchema = exports.IntFieldUpdateOperationsInputSchema = exports.DecimalFieldUpdateOperationsInputSchema = exports.NullableStringFieldUpdateOperationsInputSchema = exports.StringFieldUpdateOperationsInputSchema = exports.DecimalWithAggregatesFilterSchema = exports.StringNullableWithAggregatesFilterSchema = exports.StringWithAggregatesFilterSchema = exports.IntWithAggregatesFilterSchema = exports.UserSumOrderByAggregateInputSchema = exports.UserMinOrderByAggregateInputSchema = exports.UserMaxOrderByAggregateInputSchema = exports.UserAvgOrderByAggregateInputSchema = exports.UserCountOrderByAggregateInputSchema = exports.DecimalFilterSchema = exports.StringNullableFilterSchema = exports.StringFilterSchema = exports.IntFilterSchema = exports.UserUncheckedUpdateManyInputSchema = exports.UserUpdateManyMutationInputSchema = exports.UserCreateManyInputSchema = exports.UserUncheckedUpdateInputSchema = exports.UserUpdateInputSchema = exports.UserUncheckedCreateInputSchema = exports.UserCreateInputSchema = exports.UserScalarWhereWithAggregatesInputSchema = exports.UserOrderByWithAggregationInputSchema = exports.UserWhereUniqueInputSchema = exports.UserOrderByWithRelationInputSchema = exports.UserWhereInputSchema = exports.UserSelectSchema = exports.UserSchema = exports.UserScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.SortOrderSchema = exports.QueryModeSchema = exports.isValidDecimalInput = exports.DECIMAL_STRING_REGEX = exports.DecimalJSLikeListSchema = exports.DecimalJSLikeSchema = void 0;
exports.UserDeleteManyArgsSchema = exports.UserUpdateManyArgsSchema = exports.UserUpdateArgsSchema = exports.UserDeleteArgsSchema = exports.UserCreateManyArgsSchema = exports.UserUpsertArgsSchema = exports.UserCreateArgsSchema = exports.UserFindUniqueOrThrowArgsSchema = exports.UserFindUniqueArgsSchema = exports.UserGroupByArgsSchema = exports.UserAggregateArgsSchema = exports.UserFindManyArgsSchema = exports.UserFindFirstOrThrowArgsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
// DECIMAL
//------------------------------------------------------
exports.DecimalJSLikeSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number() });
exports.DecimalJSLikeListSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number() }).array();
exports.DECIMAL_STRING_REGEX = /^[0-9.,e+-bxffo_cp]+$|Infinity|NaN/;
const isValidDecimalInput = (v) => {
    if (!v)
        return false;
    return ((typeof v === 'object' && 'd' in v && 'e' in v && 's' in v) ||
        (typeof v === 'string' && exports.DECIMAL_STRING_REGEX.test(v)) ||
        typeof v === 'number');
};
exports.isValidDecimalInput = isValidDecimalInput;
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.QueryModeSchema = zod_1.z.enum(['default', 'insensitive']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'email', 'name', 'num']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    email: zod_1.z.string(),
    name: zod_1.z.string().nullable(),
    num: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Field "num" must be a Decimal', path: ['Models', 'User'] }),
});
/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////
// USER
//------------------------------------------------------
exports.UserSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    num: zod_1.z.boolean().optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
exports.UserWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UserWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.lazy(() => exports.DecimalFilterSchema), zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' })]).optional(),
}).strict();
exports.UserOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.UserWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    email: zod_1.z.string().optional(),
}).strict();
exports.UserOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.UserCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.UserAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.UserMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.UserMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.UserSumOrderByAggregateInputSchema).optional(),
}).strict();
exports.UserScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.lazy(() => exports.DecimalWithAggregatesFilterSchema), zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' })]).optional(),
}).strict();
exports.UserCreateInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    name: zod_1.z.string().optional().nullable(),
    num: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }),
}).strict();
exports.UserUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    email: zod_1.z.string(),
    name: zod_1.z.string().optional().nullable(),
    num: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }),
}).strict();
exports.UserUpdateInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.DecimalFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.UserUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.DecimalFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.UserCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    email: zod_1.z.string(),
    name: zod_1.z.string().optional().nullable(),
    num: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }),
}).strict();
exports.UserUpdateManyMutationInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.DecimalFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.UserUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    num: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.DecimalFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.IntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.StringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.StringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.DecimalFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    lt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    lte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    not: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.NestedDecimalFilterSchema)]).optional(),
}).strict();
exports.UserCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.UserAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.UserMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.UserMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.UserSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    num: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
}).strict();
exports.IntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
}).strict();
exports.StringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
}).strict();
exports.StringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
}).strict();
exports.DecimalWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    lt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    lte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    not: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.NestedDecimalWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
}).strict();
exports.StringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional(),
}).strict();
exports.NullableStringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional().nullable(),
}).strict();
exports.DecimalFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    increment: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    decrement: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    multiply: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    divide: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
}).strict();
exports.IntFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.number().optional(),
    increment: zod_1.z.number().optional(),
    decrement: zod_1.z.number().optional(),
    multiply: zod_1.z.number().optional(),
    divide: zod_1.z.number().optional(),
}).strict();
exports.NestedIntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.NestedStringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.NestedStringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedDecimalFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    lt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    lte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    not: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.NestedDecimalFilterSchema)]).optional(),
}).strict();
exports.NestedIntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
}).strict();
exports.NestedFloatFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedFloatFilterSchema)]).optional(),
}).strict();
exports.NestedStringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
}).strict();
exports.NestedStringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
}).strict();
exports.NestedIntNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.number().array().optional().nullable(),
    notIn: zod_1.z.number().array().optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedDecimalWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.string().array(), exports.DecimalJSLikeListSchema,]).refine((v) => Array.isArray(v) && v.every((v) => (0, exports.isValidDecimalInput)(v)), { message: 'Must be a Decimal' }).optional(),
    lt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    lte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gt: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    gte: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }).optional(),
    not: zod_1.z.union([zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: 'Must be a Decimal' }), zod_1.z.lazy(() => exports.NestedDecimalWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDecimalFilterSchema).optional(),
}).strict();
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
exports.UserFindFirstArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationInputSchema.array(), exports.UserOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: exports.UserScalarFieldEnumSchema.array().optional(),
}).strict();
exports.UserFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationInputSchema.array(), exports.UserOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: exports.UserScalarFieldEnumSchema.array().optional(),
}).strict();
exports.UserFindManyArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationInputSchema.array(), exports.UserOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: exports.UserScalarFieldEnumSchema.array().optional(),
}).strict();
exports.UserAggregateArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationInputSchema.array(), exports.UserOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UserGroupByArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithAggregationInputSchema.array(), exports.UserOrderByWithAggregationInputSchema]).optional(),
    by: exports.UserScalarFieldEnumSchema.array(),
    having: exports.UserScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UserFindUniqueArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserCreateArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    data: zod_1.z.union([exports.UserCreateInputSchema, exports.UserUncheckedCreateInputSchema]),
}).strict();
exports.UserUpsertArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
    create: zod_1.z.union([exports.UserCreateInputSchema, exports.UserUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.UserUpdateInputSchema, exports.UserUncheckedUpdateInputSchema]),
}).strict();
exports.UserCreateManyArgsSchema = zod_1.z.object({
    data: exports.UserCreateManyInputSchema.array(),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.UserDeleteArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserUpdateArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    data: zod_1.z.union([exports.UserUpdateInputSchema, exports.UserUncheckedUpdateInputSchema]),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UserUpdateManyMutationInputSchema, exports.UserUncheckedUpdateManyInputSchema]),
    where: exports.UserWhereInputSchema.optional(),
}).strict();
exports.UserDeleteManyArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
}).strict();
