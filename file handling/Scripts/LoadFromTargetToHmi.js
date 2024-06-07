var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let file_handling;
        (function (file_handling) {
            function LoadFromTargetToHmi(ctx, Name, Dir, Ext) {
                $.get(`/${file_handling.BuildPath(Name, Dir, Ext)}?${(new Date).getTime()}`, (result) => ctx.success(result)).catch(error => { ctx.error(error); console.error(error); });
            }
            file_handling.LoadFromTargetToHmi = LoadFromTargetToHmi;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('LoadFromTargetToHmi', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.LoadFromTargetToHmi);
//# sourceMappingURL=LoadFromTargetToHmi.js.map