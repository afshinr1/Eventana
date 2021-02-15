using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class bruh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests");

            migrationBuilder.AlterColumn<int>(
                name: "TestCommentId",
                table: "Tests",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GuestId",
                table: "Tests",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests",
                column: "GuestId",
                principalTable: "Guests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests",
                column: "TestCommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests");

            migrationBuilder.AlterColumn<int>(
                name: "TestCommentId",
                table: "Tests",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GuestId",
                table: "Tests",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests",
                column: "GuestId",
                principalTable: "Guests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests",
                column: "TestCommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
